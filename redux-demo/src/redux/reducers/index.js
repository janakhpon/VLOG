import { combineReducers } from "redux";
import * as task from './task';

const rootReducer = combineReducers({
    ...task
})

export default rootReducer;