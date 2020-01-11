import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ROTATION_CHAMPION_REQUEST } from "../reducers/champ";
import styled from 'styled-components';

// 새로고침을 했을 때 styled-components 가 적용 되지 않는 문제가 있었는데
// .babelrc 파일 추가하고 ~~ 적어주고
// package.json에 밑의 내용 추가해서 npm i 하고 나니 성공!!
// "devDependencies": {
//  "babel-plugin-styled-components": "^1.8.0"
//}
const ChampionUl = styled.ul`
  list-style : none;
  display : flex;
  flex-flow : wrap;
  border: 1px solid #1890FF;
  border-radius : 5px;
  justify-content : center;
  align-items : center;
  min-width : 300px;
  & li {
    flex : 1;
    text-align : center;
  }
`;

const RotationChamp = () => {
  const { rotationChampion } = useSelector(state => state.champ);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ROTATION_CHAMPION_REQUEST
    });
  }, []);
  return (
    <>
    <h1>로테이션 챔피언</h1>
    <ChampionUl>
      {rotationChampion.map(r => {
        return <li key ={r.id}><img  src={`http://localhost:3065/champ/champ_${r.id}.png`}/><div>{r.championName.length < 5 ? r.championName : r.championName.slice(0,4)}</div></li>
      })}
    </ChampionUl>
    </>
  );
};

export default RotationChamp;
