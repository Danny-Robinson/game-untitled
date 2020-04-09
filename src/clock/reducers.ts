import { AppActions } from "../redux-common/types";
import {
  INCREMENT_MINUTES,
  Clock,
  INCREMENT_HOURS,
  UNPAUSE_GAME,
  PAUSE_GAME
} from "./types";
import { clockReducerDefaultState } from "../redux-common/default-store-state";

export function clock(
  state = clockReducerDefaultState,
  action: AppActions
): Clock {
  switch (action.type) {
    case INCREMENT_MINUTES: {
      const adjustedMinutes = (state.minutes += action.minutes);
      const adjustedHours = state.hours + Math.floor(adjustedMinutes / 60);

      const minutes = adjustedMinutes % 60;
      const hours = adjustedHours % 24;
      const days = state.days + Math.floor(adjustedHours / 24);
      return { ...state, minutes, hours, days };
    }
    case INCREMENT_HOURS:
      const adjustedHours = state.hours + action.hours;

      const hours = adjustedHours % 24;
      const days = state.days + Math.floor(adjustedHours / 24);
      return { ...state, hours, days };
    default:
      return state;
  }
}

export function paused(state = false, action: AppActions): boolean {
  switch (action.type) {
    case PAUSE_GAME:
      return true;
    case UNPAUSE_GAME:
      return false;
    default:
      return state;
  }
}
