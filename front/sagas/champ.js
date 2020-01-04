import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ROTATION_CHAMPION_REQUEST, ROTATION_CHAMPION_SUCCESS, ROTATION_CHAMPION_FAILURE } from '../reducers/champ';

function rotationChampAPI(){
    return axios.get(`/champion/rotations`);
}

function* rotationChamp() {
    try{
        const result = yield call(rotationChampAPI);
        yield put({
            type : ROTATION_CHAMPION_SUCCESS,
            data : result.data,
        })
    }catch(e){
        console.error(e);
        yield put({
            type: ROTATION_CHAMPION_FAILURE,
            error : e
        });
    }
}
function* watchRotationChamp(){
    yield takeLatest(ROTATION_CHAMPION_REQUEST, rotationChamp);
}

export default function* userSaga() {
    yield all([ 
        fork(watchRotationChamp),
    ]);
}