import produce from 'immer';

export const initialState = {
    rotationChampion : [],
    rotationError : "",
};

export const ROTATION_CHAMPION_REQUEST = "ROTATION_CHAMPION_REQUEST";
export const ROTATION_CHAMPION_SUCCESS = "ROTATION_CHAMPION_SUCCESS";
export const ROTATION_CHAMPION_FAILURE = "ROTATION_CHAMPION_FAILURE";

const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case ROTATION_CHAMPION_REQUEST : {
                draft.rotationError = '';
                break;
            }
            case ROTATION_CHAMPION_SUCCESS : {
                console.log(action.data);
                action.data.forEach(v => {
                    draft.rotationChampion.push(v);
                });
                break;
            }
            case ROTATION_CHAMPION_FAILURE : {
                draft.rotationError = action.error;
                break;
            }
            default : break;
        }
    })
}

export default reducer;