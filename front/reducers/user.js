import produce from 'immer';

export const initialState = {
    userName : '',
    userRanks : [],
    isLoadedUser : false
};

export const SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";


const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case SEARCH_USER_REQUEST : {
                draft.isLoadedUser = false;
                break;
            }
            case SEARCH_USER_SUCCESS : {
                draft.userName = action.data[0];
                draft.userRanks = action.data.filter((v,i) => i !== 0).sort((a, b) =>{
                    let queA = a.queueType.toUpperCase();
                    let queB = b.queueType.toUpperCase();
                    if (queA > queB) {
                        return -1;
                    }
                    if (queA < queB) {
                        return 1;
                    }
                    return 0;
                });
                draft.isLoadedUser = true;
                break;
            }
            case SEARCH_USER_FAILURE : {
                draft.isLoadedUser = false;
                break;
            }
            default : break;
        }
    })
}

export default reducer;