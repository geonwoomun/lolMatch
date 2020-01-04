import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "antd";
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
        itemLayout="horizontal"
        size="small"
        dataSource={rotationChampion}
        renderItem={item => (
          <List.Item
            style={{ width: 100 }}
            
            key={item.id}
            actions={[<div>{item.championName}</div>]}
            extra={
              <img
                width={80}
                alt="champ"
                src={`http://localhost:3065/champ/champ_${item.id}.PNG`}
              />
            }
          />
        )}
      ></List>
    </>
  );
};

export default RotationChamp;
