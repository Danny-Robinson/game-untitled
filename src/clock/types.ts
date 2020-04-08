export interface Clock {
  minutes: number;
  hours: number;
  days: number;
}

export const INCREMENT_MINUTES = "INCREMENT_MINUTES";
export const INCREMENT_HOURS = "INCREMENT_HOURS";
export const INCREMENT_DAYS = "INCREMENT_DAYS";
export const PAUSE_GAME = "PAUSE_GAME";
export const UNPAUSE_GAME = "UNPAUSE_GAME";

export interface IncrementMinutesAction {
  type: typeof INCREMENT_MINUTES;
  minutes: Clock["minutes"];
}

export interface IncrementHoursAction {
  type: typeof INCREMENT_HOURS;
  hours: Clock["hours"];
}

export interface IncrementDaysAction {
  type: typeof INCREMENT_DAYS;
  days: Clock["days"];
}

export interface PauseGameAction {
  type: typeof PAUSE_GAME;
}

export interface UnpauseGameAction {
  type: typeof UNPAUSE_GAME;
}

export type ClockActionTypes =
  | IncrementMinutesAction
  | IncrementHoursAction
  | IncrementDaysAction
  | PauseGameAction
  | UnpauseGameAction;
