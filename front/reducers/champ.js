import produce from 'immer';

export const initialState = {
    seeRotationChampion : true,
    rotationChampion : [],
    rotationError : "",
};

export const ROTATION_CHAMPION_REQUEST = "ROTATION_CHAMPION_REQUEST";
export const ROTATION_CHAMPION_SUCCESS = "ROTATION_CHAMPION_SUCCESS";
export const ROTATION_CHAMPION_FAILURE = "ROTATION_CHAMPION_FAILURE";

export const SEE_ROTATION_REQUEST = "SEE_ROTATION_REQUEST";
export const SEE_ROTATION_SUCCESS = "SEE_ROTATION_REQUEST";
export const DONT_SEE_ROTATION = "DONT_SEE_ROTATION";

const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ROTATION_CHAMPION_REQUEST : {
                draft.rotationChampion = [];
                draft.rotationError = '';
                break;
            }
            case ROTATION_CHAMPION_SUCCESS : {
                action.data.forEach(v => {
                    draft.rotationChampion.push(v);
                });
                break;
            }
            case ROTATION_CHAMPION_FAILURE : {
                draft.rotationError = action.error;
                break;
            }
            case SEE_ROTATION_REQUEST : {
                break;
            }
            case SEE_ROTATION_SUCCESS : {
                draft.seeRotationChampion = true;
            }
            case DONT_SEE_ROTATION :{
                draft.seeRotationChampion = false;
            }
            default : break;
        }
    })
}

export default reducer;