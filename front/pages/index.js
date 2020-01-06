import React from 'react';
import InputForm from '../components/InputForm';
import UserProfile from '../components/UserProfile';
import UserMatches from '../components/UserMatches';
import { useSelector } from 'react-redux';
import RotationChamp from '../components/RotationChamp';

const Home = () => {
    const { isLoadedUser } = useSelector(state => state.user);
    return (
        <>
            <InputForm/>
            <RotationChamp/>
            {isLoadedUser && <><UserProfile/><UserMatches/></>}
        </>
    );
};

export default Home;