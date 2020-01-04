import { combineReducers } from 'redux';
import user from './user';
import champ from './champ';

const rootReducer = combineReducers({
    user,
    champ
});

export default rootReducer;