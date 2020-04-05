import { AppActions } from "../redux-common/types";
import { INCREMENT_MINUTES, Clock } from "./types";

const clockReducerDefaultState: Clock = { minutes: 0, hours: 0, days: 0 };

export function clock(
  state = clockReducerDefaultState,
  action: AppActions
): Clock {
  switch (action.type) {
    case INCREMENT_MINUTES:
      var minutes = (state.minutes += action.minutes);
      var timeInHours = minutes / 60;
      var hours = state.hours + Math.floor(timeInHours);
      minutes = minutes % 60;
      return { ...state, minutes, hours };
    default:
      return state;
  }
}
