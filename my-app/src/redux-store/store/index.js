import {applyMiddleware, combineReducers, createStore} from "redux";
import {reposReducer} from "../reducers/reposReducer/reducer/reposReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    repos: reposReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))