import { AppActions } from "../redux-common/types";
import { ADD_MESSAGE } from "./types";

export function messages(
  state: ReadonlyArray<string> = [],
  action: AppActions
): ReadonlyArray<string> {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}
