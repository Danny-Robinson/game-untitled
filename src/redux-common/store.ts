import { combineReducers, createStore } from "redux";
import * as timerReducer from "../clock/reducers";
import * as resourcesReducer from "../resources/reducers";

export const rootReducer = combineReducers({
  ...timerReducer,
  ...resourcesReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
