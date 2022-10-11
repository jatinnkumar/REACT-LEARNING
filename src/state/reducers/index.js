import { combineReducers } from "redux";
import incDecNum from './incDecNum';

const reducers = combineReducers({
    number: incDecNum
    // If there are more than one reducer than we will add another reducer below the first one ("number: incDecNum") after adding comma after ("incDecNum") above...
});

export default reducers;