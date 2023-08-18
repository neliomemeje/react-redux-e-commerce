import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers/index";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = legacy_createStore(rootReducer, devToolsEnhancer());

export default store;
