import { INCREMENT_MINUTES, INCREMENT_HOURS, INCREMENT_DAYS } from "./types";
import { AppActions } from "../redux-common/types";
import { Dispatch } from "redux";
import { StoreState } from "../redux-common/store";

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
