import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ROTATION_CHAMPION_REQUEST, ROTATION_CHAMPION_SUCCESS, ROTATION_CHAMPION_FAILURE, SEE_ROTATION, SEE_ROTATION_REQUEST, SEE_ROTATION_SUCCESS } from '../reducers/champ';
import { INIT_PROFILE } from '../reducers/user';

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

function* seeRotation() {
    yield put({
        type : SEE_ROTATION_SUCCESS
     })
     yield put({
         type : INIT_PROFILE,
     })

}
function* watchSeeRotation(){
    yield takeLatest(SEE_ROTATION_REQUEST, seeRotation);
}

export default function* userSaga() {
    yield all([ 
        fork(watchRotationChamp),
        fork(watchSeeRotation),
    ]);
}