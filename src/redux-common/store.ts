import { combineReducers, createStore } from "redux";
import * as timerReducer from "../clock/reducers";
import * as resourcesReducer from "../resources/reducers";
import * as attributesReducer from "../attributes/reducers";
import * as messagesReducer from "../message-feed/reducers";

export const rootReducer = combineReducers({
  ...timerReducer,
  ...resourcesReducer,
  ...attributesReducer,
  ...messagesReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
