import { INCREMENT_MINUTES } from "./types";

export const incrementMinutes = (minutes: number) => ({
  type: INCREMENT_MINUTES,
  minutes,
});
