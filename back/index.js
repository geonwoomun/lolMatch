const express = require('express');
const morgan = require('morgan'); // 로그를 찍어준다.
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const axios = require('axios');
const { getChampion } = require('./etc/champion');
// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구.

dotenv.config();
app.use(cors());
app.use(morgan('dev'));  // 로그 찍어주는 설정.
app.use('/',express.static('images'));
app.use(express.json()); // json 형식 처리
app.use(express.urlencoded({ extended : true })); // form으로 넘어온 데이터 처리
// req.body 정상적으로 동작하게 해줌.

app.get('/api/user/:name', async (req, res, next) =>{
    try{
        const data = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(req.params.name)}?api_key=${process.env.RIOT_API_KEY}`);
        // 유저 이름으로 유저아이디 등등을 가져올 수 있음.
        console.log(data.data);
        const user = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.data.id}?api_key=${process.env.RIOT_API_KEY}`);
        // 그아이디로 유저의 솔로랭크, 자유랭크 같은 전적들을 가져온다.
        let userInfo = {}; // 유저 정보들을 받아올 것임.
        userInfo.name = data.data.name;
        user.data.sort((a,b) => { // 솔로랭크, 자유랭크 순으로 정렬
            let queA = a.queueType.toUpperCase();
                    let queB = b.queueType.toUpperCase();
                    if (queA > queB) {
                        return -1;
                    }
                    if (queA < queB) {
                        return 1;
                    }
                    return 0;
                });
        user.data.forEach(v => {
            userInfo[v.queueType] = v
        });
        const matches = await axios.get(`https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.data.accountId}?endIndex=10&beginIndex=0&api_key=${process.env.RIOT_API_KEY}`);
        // 게임들을 다 가져옴
        const matchesDetails = await Promise.all(matches.data.matches.map(async (v) => { // 경기마다 사용자의 디테일 정보들을 가져옴.
            const details = await axios.get(`https://kr.api.riotgames.com/lol/match/v4/matches/${v.gameId}?api_key=${process.env.RIOT_API_KEY}`);
            const participantId = details.data.participantIdentities.filter(v => v.player.summonerName === req.params.name)[0].participantId;
            const detailInfo = details.data.participants[participantId-1];
            const matchInfo = {}
            matchInfo.type = details.data.queueId
            matchInfo.team = details.data.participants.map((v, i) =>{
                if(participantId === i + 1){
                    matchInfo.champion = v.championId;
                }
                return v.championId;
            })
            matchInfo.win = detailInfo.stats.win;
            matchInfo.KDA = [detailInfo.stats.kills, detailInfo.stats.deaths, detailInfo.stats.assists]
            matchInfo.item = [detailInfo.stats.item0, detailInfo.stats.item1, detailInfo.stats.item2, detailInfo.stats.item3, detailInfo.stats.item4, detailInfo.stats.item5, detailInfo.stats.item6]
            matchInfo.SR = [detailInfo.spell1Id, detailInfo.spell2Id, detailInfo.stats.perk0, detailInfo.stats.perkSubStyle]
            matchInfo.LVGCS = [detailInfo.stats.champLevel, detailInfo.stats.goldEarned, detailInfo.stats.totalMinionsKilled]
            matchInfo.play = [details.data.gameDuration, details.data.gameCreation];
            return matchInfo
        }));
        userInfo.detailInfos = matchesDetails;
        userInfo.matches = matches.data.matches;
        res.send(userInfo);
    }catch(e) {
        console.error(e);
        next(e);
    }
});

app.get('/api/checkGaming/:name', async (req, res, next) => { // 현재 게임 진행 중인거 보려고
    // gameStartTime,
    // gameQueueConfigId 랭크인지 자유랭인지 이러거
    // participants : [
    //     {
    //         championId,
    //         summonerName,
    //         bot,
    //         perksStyle,
    //         perkIds : [

    //         ]
    //         perkSubStyle
    //         spell1Id,
    //         spell2Id,
    //     }
            
    //     gameLength
    //     bannedChampions : [
    //         championId,
    //     ]
    // ]
    try {
        const data = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(req.params.name)}?api_key=${process.env.RIOT_API_KEY}`);
        const gameInfo = await axios.get(`https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${data.data.id}?api_key=${process.env.RIOT_API_KEY}`);

    } catch(e){
        console.error(e);
        next(e);
    }
})

app.get('/api/champion/rotations', async(req, res, next) => {
    try{
        const data = await axios.get(`https://kr.api.riotgames.com//lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`);
        let rotations = data.data.freeChampionIds.map(v => {
            return getChampion(v)
        });
        res.send(rotations);
    }catch(e) {
        console.error(e);
        next(e);
    }
});

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});