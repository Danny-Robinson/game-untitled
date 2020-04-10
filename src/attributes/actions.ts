import { AppActions } from "../redux-common/types";
import {
  INCREMENT_FITNESS,
  DECREMENT_FITNESS,
  INCREMENT_COMBAT,
  DECREMENT_COMBAT
} from "./types";

export const incrementFitness = (fitnessProgress: number): AppActions => ({
  type: INCREMENT_FITNESS,
  fitnessProgress
});

export const decrementFitness = (fitnessProgress: number): AppActions => ({
  type: DECREMENT_FITNESS,
  fitnessProgress
});

export const incrementCombat = (combatProgress: number): AppActions => ({
  type: INCREMENT_COMBAT,
  combatProgress
});

export const decrementCombat = (combatProgress: number): AppActions => ({
  type: DECREMENT_COMBAT,
  combatProgress
});
