import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
// child reducers

export const INITIAL_APP_STORE_STATE = {};

const rootReducer = combineReducers({ router: routerReducer });

export default rootReducer;
