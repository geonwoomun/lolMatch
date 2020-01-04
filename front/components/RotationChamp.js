import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Card } from "antd";
import { ROTATION_CHAMPION_REQUEST } from "../reducers/champ";

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
      <List
        grid={{ gutter: 4, column: 5, padding: "0px", margin: "0px"}}
        itemLayout="horizontal"
        size="small"
        dataSource={rotationChampion}
        renderItem={item => (
          <List.Item
            style={{ width: 50, padding : "0px", margin: "0px"}}
            key={item.id}>
                 <Card style ={{padding : "0px", margin: "0px"}} hoverable style={{ width: 100 }} cover={<img
                alt="champ"
                src={`http://localhost:3065/champ/champ_${item.id}.PNG`}
            />}>{item.championName}</Card> 
            </List.Item>
        )}
      ></List>
    </>
  );
};

export default RotationChamp;
