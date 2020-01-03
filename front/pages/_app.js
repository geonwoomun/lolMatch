import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import PropTypes from 'prop-types';

const LolMatch = ({ Component, store }) => {
    return (
        <Provider store = {store}>
            <Head>
                <title>LolMatch</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"/>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </Provider>
    )
};

LolMatch.propTypes = {
    Component : PropTypes.elementType.isRequired, 
};

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    // 여기에다가 store 커스터마이징.
    const middlewares = [sagaMiddleware]; // 변조하거나 기능을 추가.
    const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) :
    compose(applyMiddleware(...middlewares),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : 
    (f) => f);// compose : 미들웨어끼리 합성,  applyMiddleware 미들웨어 적용
    const store = createStore(reducer, initialState, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga); // 루트사가 연결
    return store; // store를 props로 받을 수 있음.
};

export default withRedux(configureStore)(LolMatch);