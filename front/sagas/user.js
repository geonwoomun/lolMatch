import { all, fork, delay, takeLatest,takeEvery, call, put, take } from 'redux-saga/effects';
import axios from 'axios';
import { SEARCH_USER_REQUEST, SEARCH_USER_FAILURE, SEARCH_USER_SUCCESS } from '../reducers/user';

function searchUserAPI(userName){
    return axios.get(`/user/${userName}`);
}

function* searchUser(action) {
    try{
        const result = yield call(searchUserAPI, action.data);
        yield put({
            type : SEARCH_USER_SUCCESS,
            data : result.data,
        })
    }catch(e){
        console.error(e);
        yield put({
            type: SEARCH_USER_FAILURE,
            error : e
        });
    }
}
function* watchSearch(){
    yield takeLatest(SEARCH_USER_REQUEST, searchUser);
}

export default function* userSaga() {
    yield all([ //call fork는 둘다 함수를 실행해줌. call 동기호출 fork 비동기 호출출
        fork(watchSearch), // 많은 액션들 사이에 순서가 없다. 사용자의 이벤트 클릭에 따라 작동.
        // 순서가 의미가 없으니깐 fork
    ]); // 사용자에 관한 리덕스 액션이 여러개면 all로 묶어서 다 넣어줘야함.
}