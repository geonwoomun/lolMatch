import React, { useState, useCallback } from 'react';
import InputForm from '../components/InputForm';
import UserProfile from '../components/UserProfile';
import UserMatches from '../components/UserMatches';
import { useSelector, useDispatch } from 'react-redux';
import RotationChamp from '../components/RotationChamp';
import { Button } from 'antd';

const Home = () => {
    const dispatch = useDispatch();
    const { userName, isLoadedUser, gamingCheck } = useSelector(state => state.user);
    const onGamingCheck = useCallback(() => {
        dispatch({
            type : CHECK_GAMING_REQUEST,
            data : userName
        })
    }, []);
    return (
        <>
            <InputForm/>
            <RotationChamp/>
            {isLoadedUser && <><UserProfile/>
            <Button onClick ={onGamingCheck}>인게임 정보</Button>
            {gamingCheck ? <GameInfo/> : null }
            <UserMatches/></>}
        </>
    );
};

export default Home;