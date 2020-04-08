import { combineReducers, createStore } from "redux";
import * as timerReducer from "../clock/reducers";
import * as resourcesReducer from "../resources/reducers";
import * as attributesReducer from "../attributes/reducers";
import * as messagesReducer from "../message-feed/reducers";
import { AppActions, CLEAR_STORE } from "./types";
import { loadState, saveState } from "./localstorage";
import { throttle } from "lodash";

const appReducer = combineReducers({
  ...timerReducer,
  ...resourcesReducer,
  ...attributesReducer,
  ...messagesReducer
});

export const rootReducer = (state: StoreState, action: AppActions) => {
  if (action.type === CLEAR_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export type StoreState = ReturnType<typeof appReducer> | undefined;

const persistantState = loadState();
export const store = createStore(rootReducer, persistantState);

store.subscribe(throttle(() => saveState(store.getState()), 1000));
