import { combineReducers, createStore } from "redux";
import * as timerReducer from "../clock/reducers";

export const rootReducer = combineReducers({
  ...timerReducer
});

export type StoreState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
