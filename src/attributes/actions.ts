import { AppActions } from "../redux-common/types";
import { INCREMENT_FITNESS, DECREMENT_FITNESS } from "./types";

export const incrementFitness = (fitnessProgress: number): AppActions => ({
  type: INCREMENT_FITNESS,
  fitnessProgress
});

export const decrementFitness = (fitnessProgress: number): AppActions => ({
  type: DECREMENT_FITNESS,
  fitnessProgress
});
