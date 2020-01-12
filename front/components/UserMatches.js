import React from "react";
import { useSelector } from "react-redux";
import { List, Card, Table } from "antd";
import styled from 'styled-components';

const TableWrapper = styled(Table)`
  & .tableRowBlue {
    background : #D4E4FE;
  }
  & .tableRowRed {
    background : #FFEEEE;
  }
`;

const UserMatches = () => {
  const { detailInfos } = useSelector(state => state.user);
  const columns = [
    {
      title: "승",
      dataIndex: "win",
      key: "win",
      render: text => (text ? "승" : "패" )
    },
    {
      title: "챔피언",
      dataIndex: "champion",
      key: "champion",
      render: champ => (
        <img
          style={{ witdh: 100 }}
          src={`http://localhost:3065/champ/champ_${champ}.png`}
        ></img>
      )
    },
    {
      title: "타입",
      dataIndex: "type",
      key: "type",
      render: type => (
        <div>
          {type}
        </div>
      )
    },
    {
      title: "KDA",
      dataIndex: "KDA",
      key: "KDA",
      render: kda => (
        <div>
          {"평점:" , (kda[0] + kda[2]) / kda[1] === Infinity ? "Perfect" : ((kda[0] + kda[2]) / kda[1]).toFixed(2) }
          <br />
          {`${kda[0]}/${kda[1]}/${kda[2]}`}
        </div>
      )
    },
    {
      title: "S/R",
      dataIndex: "SR",
      key: "SR",
      render: sr => (
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: 40 }}
              src={`http://localhost:3065/spell/${sr[0]}.png`}
            ></img>
            <img
              style={{ width: 40 }}
              src={`http://localhost:3065/spell/${sr[1]}.png`}
            ></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: 40 }}
              src={`http://localhost:3065/rune/${sr[2]}.png`}
            ></img>
            <img
              style={{ width: 40 }}
              src={`http://localhost:3065/rune/${sr[3]}.png`}
            ></img>
          </div>
        </div>
      )
    },
    {
      title: "팀",
      dataIndex: "team",
      key: "team",
      render: team => {
        const team1 = team.slice(0, 5);
        const team2 = team.slice(5);
        return (
          <div>
            <div style={{ display: "flex" }}>
              {team1.map(t => (
                <img
                  style={{ width: 30, margin: 1 }}
                  src={`http://localhost:3065/champ/champ_${t}.png`}
                />
              ))}
            </div>
            <div style={{ display: "flex"}}>
              {team2.map(t => (
                <img
                  style={{ width: 30, margin : 1  }}
                  src={`http://localhost:3065/champ/champ_${t}.png`}
                />
              ))}
            </div>
          </div>
        );
      }
    },
    {
      title: "아이템",
      dataIndex: "item",
      key: "item",
      render: item => (
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 140, minWidth: 140 }}>
          {item.map(t => {
            return (
              <img
                stlye={{ width: 10, height: 10 }}
                src={`http://localhost:3065/item/${t}.png`}
              ></img>
            );
          })}
        </div>
      )
    },
    {
      title: "LV/G/CS",
      dataIndex: "LVGCS",
      key: "LVGCS",
      render: lvgcs => (
        <div>
          레벨 : {lvgcs[0]}
          <br />
          골드 : {lvgcs[1]}
          <br />
          cs : {lvgcs[2]}
        </div>
      )
    },
    {
      title: "플레이",
      dataIndex: "play",
      key: "play",
      render : play => {
        const now = new Date();
        const nowTime = now.getTime();
        const timeBetween = (nowTime- play[1])/1000/60/60/24;
       return  <><div>{parseInt(play[0]/60)+"분 "+play[0]%60+"초"}</div>
        <div>
            {timeBetween >= 1 ? Math.floor(timeBetween)+"일 전" :  timeBetween * 24 >= 1 ? Math.floor(timeBetween * 24) + "시간 전" : Math.floor(timeBetween * 24 * 60) + "분 전"}
        </div></> // 일전 0.7 보다 높으면 시간전  아니면 분전.  분전 오차가 좀 있음..
      }
    
    }
  ];
  return (
    <div>
      <TableWrapper 
      rowClassName={(record) => {
        console.log(record);
        return record.win ? "tableRowBlue" : "tableRowRed"}}
      columns={columns} dataSource={detailInfos} />
    </div>
  );
};

export default UserMatches;
