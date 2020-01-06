import React from 'react';
import { useSelector } from 'react-redux';
import { List, Card, Table } from "antd";

const UserMatches = () => {
    const { userMatches, detailInfos } = useSelector(state => state.user);
    const columns = [
        {
            title : "승",
            dataIndex : "win",
            key : "win",
            render : text => text ? "승" : "패"
        },
        {
            title : "챔피언",
            dataIndex : "champion",
            key : "champion",
            render : champ => <img style ={{witdh : 100 }} src={`http://localhost:3065/champ/champ_${champ}.png`}></img>
            
        },
        {
            title : "타입",
            dataIndex : "type",
            key : "type",
            render : type => (
                <div>
                    {type === 420 ? "솔로랭크" : type=== 430 ? "일반" : type===440 ? "자유랭" : type===450 ? "칼바람" : " 포로왕"}
                </div>
            )
        },
        {
            title : "KDA",
            dataIndex : "KDA",
            key : "KDA",
            render : kda => <div>{"평점:" + ((kda[0] +kda[2]) /kda[1]).toFixed(2)}<br/>
        {`${kda[0] }/${kda[1] }/${kda[2]}`}</div>
        },
        {
            title : "S/R",
            dataIndex : "SR",
            key : "SR",
            render : sr => <div style={{display:"flex"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img style ={{width : 50}} src = {`http://localhost:3065/spell/${sr[0]}.png`}></img>
                    <img style ={{width : 50}} src = {`http://localhost:3065/spell/${sr[1]}.png`}></img>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <img style ={{width : 50}} src = {`http://localhost:3065/rune/${sr[2]}.png`}></img>
                    <img style ={{width : 50}} src = {`http://localhost:3065/rune/${sr[3]}.png`}></img>
                </div>
            </div>
        },
        {
            title : "팀",
            dataIndex : "team",
            key : "team",
        },
        {
            title : "아이템",
            dataIndex : "item",
            key : "item",
            render : item => <div style={{display:"flex"}}>
                {item.map(t => {
                    return <img stlye={{width:20, height: 20}}src={`http://localhost:3065/item/${t}.png`}></img>
                })}
            </div>
        },
        {
            title : "LV/G/CS",
            dataIndex : "LVGCS",
            key : "LVGCS",
            render : lvgcs => (
                <div>
                    레벨 : {lvgcs[0]}<br/>
                    골드 : {lvgcs[1]}<br/>
                    cs : {lvgcs[2]}
                </div>
            )
        },
        {
            title : "플레이",
            dataIndex : "play",
            key : "play",
        },
    ];
    const returnData = () => {
        let matchInfo = [] // 팀 해야함.
        for(let i = 0; i < userMatches.length; i++){
            matchInfo[i] = {
                champion : '',
                win : '',
                KDA : '',
                item : '',
                type: '',
                SR : '',
                LVGCS : '',
                team : [],
                play : 0
            }
        }
        userMatches.forEach((item, i) => {
            matchInfo[i].champion = item.champion
            matchInfo[i].type = item.queue
        });
        detailInfos.forEach((item, i) => {
            matchInfo[i].win = item.stats.win;
            matchInfo[i].KDA = [item.stats.kills, item.stats.deaths, item.stats.assists]
            matchInfo[i].item = [item.stats.item0, item.stats.item1, item.stats.item2, item.stats.item3, item.stats.item4, item.stats.item5, item.stats.item6]
            matchInfo[i].SR = [item.spell1Id, item.spell2Id, item.stats.perk0, item.stats.perkSubStyle]
            matchInfo[i].LVGCS = [item.stats.champLevel, item.stats.goldEarned, item.stats.totalMinionsKilled]
            matchInfo[i].team = []
            matchInfo[i].play = 0
        });
        return matchInfo
    }
    return (
        <div>
        <Table columns={columns} dataSource={returnData()}/>
              {/* <List
      style={{width:600}}
        itemLayout="horizontal"
        size="small"
        dataSource={userMatches}
        renderItem={(item, i) => (
          <List.Item
            style={{ width: 50, padding : "0px", margin: "0px"}}
            key={item.gameId}>
                 <Card style ={{padding : "0px", margin: "0px"}} hoverable style={{ width: 100 }} cover={<img
                alt="champ"
                src={`http://localhost:3065/champ/champ_${item.champion}.png`}
            />}>
                <Card.Meta
                title={detailInfos[i] && detailInfos[i].stats.win ? "승리" : "패배"}>
                </Card.Meta>
            </Card> 
            </List.Item>
        )}
      ></List> */}
        </div>
    );
};

export default UserMatches;