import produce from 'immer';

export const initialState = {
    userName : '',
    userRanks : [],
    userMatches : [],
    detailInfos : [],
    isLoadedUser : false
};

export const SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";


const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case SEARCH_USER_REQUEST : {
                draft.userRanks = [];
                draft.userMatches = [];
                draft.detailsInfos = [];
                draft.isLoadedUser = false;
                break;
            }
            case SEARCH_USER_SUCCESS : {
                draft.userName = action.data.name;
                draft.userRanks = [action.data["RANKED_SOLO_5x5"],action.data["RANKED_FLEX_SR"]]
                draft.userMatches = action.data.matches;
                draft.detailInfos = action.data.detailInfos;
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