import { AppActions } from "../redux-common/types";
import { Dispatch } from "redux";
import { StoreState } from "../redux-common/store";
import { INCREMENT_FITNESS, DECREMENT_FITNESS } from "./types";

export const incrementFitness = (fitness: number): AppActions => ({
  type: INCREMENT_FITNESS,
  fitness
});

export const decrementFitness = (fitness: number): AppActions => ({
  type: DECREMENT_FITNESS,
  fitness
});