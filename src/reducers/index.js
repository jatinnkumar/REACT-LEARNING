import { combineReducers } from "redux";
import changeNumbers from './upDown';

const rootReducer = combineReducers({
    number: changeNumbers
});

export default rootReducer;