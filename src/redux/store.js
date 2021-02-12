import {favoritesReducer} from "./reducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    favoritesReducer: favoritesReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));