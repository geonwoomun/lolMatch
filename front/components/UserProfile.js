import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
const UserProfile = () => {
  const { userName, userRanks } = useSelector(state => state.user);
  return (
    <>
      <h1>{userName}</h1>
      {userRanks.map(match => {
        return (
            <Card
              key={match.leagueId}
              cover={
                <img style = {{ width : 100, height: 100}}src={`http://localhost:3065/${match.tier}.jpg`} alt="" />
              }
            >
              <Card.Meta title ={
              <div>{match.queueType === 'RANKED_FLEX_SR' ? "자유랭크 5x5" : "솔로랭크5x5"}
              <br/>
              {match.tier + " "+ match.rank} 등급<br/>
              {match.leaguePoints} points
              </div>} description={<div>
                  승 : {match.wins}
                  패 : {match.losses}
                  ({ ((match.wins / (match.wins+match.losses)) * 100).toFixed(2)}%)
              </div>}/>
            </Card>
        );
      })}
    </>
  );
};

export default UserProfile;
