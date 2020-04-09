import {
  INCREMENT_MINUTES,
  INCREMENT_HOURS,
  INCREMENT_DAYS,
  PAUSE_GAME,
  UNPAUSE_GAME
} from "./types";
import { AppActions } from "../redux-common/types";

export const incrementMinutes = (minutes: number): AppActions => ({
  type: INCREMENT_MINUTES,
  minutes
});

export const incrementHours = (hours: number) => ({
  type: INCREMENT_HOURS,
  hours
});

export const incrementDays = (days: number) => ({
  type: INCREMENT_DAYS,
  days
});

export const pauseGame = () => ({ type: PAUSE_GAME });
export const unpauseGame = () => ({ type: UNPAUSE_GAME });
