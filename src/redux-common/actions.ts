import { AppActions, CLEAR_STORE } from "./types";

export const clearStore = (): AppActions => ({
  type: CLEAR_STORE
});
