import React, { useState, useCallback } from 'react';
import InputForm from '../components/InputForm';
import UserProfile from '../components/UserProfile';
import UserMatches from '../components/UserMatches';
import GameInfo from '../components/GameInfo';
import { useSelector, useDispatch } from 'react-redux';
import RotationChamp from '../components/RotationChamp';
import { Button } from 'antd';
import { CHECK_GAMING_REQUEST, GAMING_FALSE } from '../reducers/user';

const Home = () => {
    const dispatch = useDispatch();
    const { userName, isLoadedUser, gamingCheck, gamingCheckMessage} = useSelector(state => state.user);
    const onGamingCheck = useCallback(() => {
        if(!gamingCheck){
            dispatch({
                type : CHECK_GAMING_REQUEST,
                data : userName
            })
        }
        else {
            dispatch({
                // 게이밍체크를 false로 만들자.
                type : GAMING_FALSE,
            })
        }
        
    }, [userName, gamingCheck]);
    return (
        <>
            <InputForm/>
            <RotationChamp/>
            {isLoadedUser && <><UserProfile/>
            <Button onClick ={onGamingCheck}>인게임 정보</Button>
            {gamingCheck && <GameInfo/>}
            {gamingCheckMessage}
            <UserMatches/></>}
        </>
    );
};

export default Home;