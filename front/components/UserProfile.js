import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import styled from 'styled-components';

const ProfileBox = styled.div`
  display : flex;
  border : 1px solid grey;
  border-radius : 5px;
  margin-top : 20px;
  margin-bottom : 10px;
  & > img {
    width : 100px;
    height : 100px;
  }
  & .level{
    border : 1px solid grey;
    width : 80px;
    display : flex;
    justify-content : center;
    margin-left : 5px;
    background : #FAFAFA;
    border-radius : 3px;
    box-shadow : 1px 1px grey;
  }
`;

const UserProfile = () => {
  const { userName, userProfile, userLevel, userRanks } = useSelector(
    state => state.user
  );
  return (
    <>
      <ProfileBox>
        <img src={`http://localhost:3065/icon/${userProfile}.png`} />
        <div>
          <h1>{userName}</h1>
          <div className ="level">레벨 : {userLevel}</div>
        </div>
      </ProfileBox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {userRanks.map(match => {
          return (
            match && (
              <Card
                style={{
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  border: "1px solid #1890FF"
                }}
                key={match.leagueId}
                cover={
                  <img
                    style={{ width: 100, height: 100 }}
                    src={`http://localhost:3065/tier/${match.tier}.jpg`}
                    alt=""
                  />
                }
              >
                <Card.Meta
                  title={
                    <div>
                      {match.queueType === "RANKED_FLEX_SR"
                        ? "자유랭크 5x5"
                        : "솔로랭크5x5"}
                      <br />
                      {match.tier + " " + match.rank} 등급
                      <br />
                      {match.leaguePoints} points
                    </div>
                  }
                  description={
                    <div>
                      {match.wins + match.losses}전 {match.wins}승{" "}
                      {match.losses}패 (
                      {(
                        (match.wins / (match.wins + match.losses)) *
                        100
                      ).toFixed(2)}
                      %)
                    </div>
                  }
                />
              </Card>
            )
          );
        })}
      </div>
    </>
  );
};

export default UserProfile;
