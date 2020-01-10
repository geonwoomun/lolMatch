import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {Button, Input, Form} from 'antd';
import { SEARCH_USER_REQUEST } from '../reducers/user';
const InputForm = () => {
    const dispatch = useDispatch();
    const [userName, setUsernName] = useState('');

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        dispatch({
            type: SEARCH_USER_REQUEST,
            data : userName
        });
    }, [userName]);

    const onChangeName = useCallback((e) => {
        setUsernName(e.target.value)
    }, [])
    return (
        <Form onSubmit={onSubmit}>
            <Input style={{width : 400}} placeholder="소환사명 검색" value = {userName} onChange={onChangeName}></Input>
            <Button type = 'primary' htmlType ="submit">검색</Button>
        </Form>
    );
};

export default InputForm;