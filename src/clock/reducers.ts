import { AppActions } from "../redux-common/types";
import { INCREMENT_MINUTES, Clock } from "./types";

const clockReducerDefaultState: Clock = { minutes: 0, hours: 0, days: 0 };

export function clock(
  state = clockReducerDefaultState,
  action: AppActions
): Clock {
  switch (action.type) {
    case INCREMENT_MINUTES:
      const timeInMinutes = (state.minutes += action.minutes);
      const timeInHours = state.hours + Math.floor(timeInMinutes / 60);
      const minutes = timeInMinutes % 60;
      const hours = timeInHours % 24;
      const days = state.days + Math.floor(timeInHours / 24);
      return { ...state, minutes, hours, days };
    default:
      return state;
  }
}
