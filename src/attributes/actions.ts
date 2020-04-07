import { AppActions } from "../redux-common/types";
import { INCREMENT_FITNESS, DECREMENT_FITNESS } from "./types";

export const incrementFitness = (
  fitness: number,
  fitnessProgress: number
): AppActions => ({
  type: INCREMENT_FITNESS,
  fitness,
  fitnessProgress
});

export const decrementFitness = (
  fitness: number,
  fitnessProgress: number
): AppActions => ({
  type: DECREMENT_FITNESS,
  fitness,
  fitnessProgress
});
