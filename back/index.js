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
        const user = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.data.id}?api_key=${process.env.RIOT_API_KEY}`)
        let list = []
        console.log(data.data);
        list.push(data.data.name);
        list = list.concat(user.data);
        res.send(list);
    }catch(e) {
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
})

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});