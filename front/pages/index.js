import React from 'react';
import InputForm from '../components/InputForm';
import UserProfile from '../components/UserProfile';
import { useSelector } from 'react-redux';

const Home = () => {
    const { isLoadedUser } = useSelector(state => state.user);
    return (
        <>
            <InputForm/>
            {isLoadedUser && <UserProfile/>}
        </>
    );
};

export default Home;