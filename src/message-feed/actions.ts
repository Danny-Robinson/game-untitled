import { AppActions } from "../redux-common/types";
import { ADD_MESSAGE } from "./types";

export const addMessage = (message: string): AppActions => ({
  type: ADD_MESSAGE,
  message,
});
