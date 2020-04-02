import { AppActions } from "../redux-common/types";
import { INCREMENT_MINUTES, Clock } from "./types";

const clockReducerDefaultState: Clock = { minutes: 0, hours: 0, days: 0 };

export function clock(
  state = clockReducerDefaultState,
  action: AppActions
): Clock {
  switch (action.type) {
    case INCREMENT_MINUTES:
      const minutes = (state.minutes += action.minutes);
      return { ...state, minutes };
    default:
      return state;
  }
}
