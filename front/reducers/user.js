import produce from 'immer';

export const initialState = {
    userName : '',
    userRanks : [],
    userMatches : [],
    detailInfos : [],
    isLoadedUser : false,
    gamingCheck : false,
    gameInfo : {},
    gamingCheckMessage : '',
};

export const SEARCH_USER_REQUEST = "SEARCH_USER_REQUEST";
export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_FAILURE = "SEARCH_USER_FAILURE";

export const CHECK_GAMING_REQUEST = "CHECK_GAMING_REQUEST";
export const CHECK_GAMING_SUCCESS = "CHECK_GAMING_SUCCESS";
export const CHECK_GAMING_FAILURE = "CHECK_GAMING_FAILURE";

export const GAMING_FALSE = "GAMING_FALSE";

const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case SEARCH_USER_REQUEST : {
                draft.userRanks = [];
                draft.userMatches = [];
                draft.detailsInfos = [];
                draft.isLoadedUser = false;
                draft.gamingCheckMessage = '';
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
            case CHECK_GAMING_REQUEST : {
                draft.gamingCheck = false;
                draft.gamingCheckMessage = '';
                break;
            }
            case CHECK_GAMING_SUCCESS : {
                draft.gamingCheck = true;
                draft.gameInfo = action.data;
                break;
            }
            case CHECK_GAMING_FAILURE : {
                draft.gamingCheck = false;
                draft.gamingCheckMessage = "게임을 진행중이지 않습니다.";
                break;
            }
            case GAMING_FALSE :{
                draft.gamingCheck = false;
                break;
            }
            default : break;
        }
    })
}

export default reducer;