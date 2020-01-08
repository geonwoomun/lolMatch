import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GameInfoWrapper = styled.div`
  & > div {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }
  & > div > img {
    width : 20px;
    height: 20px;
  }
`;

const GameInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  & .oneBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  & .runeBox {
    display: flex;
    flex-direction: column;
  }
  & .runeBox > img {
    width: 25px;
    height: 25px;
  }
  & .summonerBox {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & .summonerBox > span {
    line-height: 45px;
  }
  & .summonerBox > .spellBox {
    display: flex;
    flex-direction: column;
  }
  & .summonerBox > .spellBox > img {
    width: 20px;
    height: 20px;
  }
  & .summonerBox > img {
    width: 40px;
    height: 40px;
  }
`;

const GameInfo = () => {
  const { gameInfo } = useSelector(state => state.user);
  const nowTime = new Date();

  const gameTime = ((nowTime.getTime() - gameInfo.gameStartTime)/ 1000 / 60 - 3);
  return (
    <GameInfoWrapper>
      <div>
        {gameInfo.gameType}{" "}
        {Math.floor(gameTime) +"분 " + (gameTime % 1 * 60).toFixed() +"초"}
      </div>
      <div>
        <GameInfoBox>
          {[...gameInfo.participants].slice(0, 5).map(v => {
            return (
              <div className="oneBox">
                <div className="runeBox">
                  <img
                    src={`http://localhost:3065/rune/${v.perks.perkIds[0]}.png`}
                  />
                  <img
                    src={`http://localhost:3065/rune/${v.perks.perkSubStyle}.png`}
                  />
                </div>
                <div className="summonerBox">
                  <span>{v.summonerName}</span>
                  <div className="spellBox">
                    <img
                      src={`http://localhost:3065/spell/${v.spell1Id}.png`}
                    />
                    <img
                      src={`http://localhost:3065/spell/${v.spell2Id}.png`}
                    />
                  </div>
                  <img
                    src={`http://localhost:3065/champ/champ_${v.championId}.png`}
                  />
                </div>
              </div>
            );
          })}
        </GameInfoBox>
        <GameInfoBox>
          {[...gameInfo.participants].slice(5).map(v => {
            return (
              <div className="oneBox">
                <div className="summonerBox">
                  <img
                    src={`http://localhost:3065/champ/champ_${v.championId}.png`}
                  />
                  <div className="spellBox">
                    <img
                      src={`http://localhost:3065/spell/${v.spell1Id}.png`}
                    />
                    <img
                      src={`http://localhost:3065/spell/${v.spell2Id}.png`}
                    />
                  </div>
                  <span>{v.summonerName}</span>
                </div>
                <div className="runeBox">
                  <img
                    src={`http://localhost:3065/rune/${v.perks.perkIds[0]}.png`}
                  />
                  <img
                    src={`http://localhost:3065/rune/${v.perks.perkSubStyle}.png`}
                  />
                </div>
              </div>
            );
          })}
        </GameInfoBox>
      </div>
      <div>
          {[...gameInfo.bannedChampions].slice(0,5).map(v => <img src={`http://localhost:3065/champ/champ_${v.championId}.png`}/>) }
          <span>금지</span>
          {[...gameInfo.bannedChampions].slice(5).map(v=> <img src={`http://localhost:3065/champ/champ_${v.championId}.png`}/>) }
      </div>
    </GameInfoWrapper>
  );
};

export default GameInfo;
