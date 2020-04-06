import { AppActions } from "../redux-common/types";
import { Dispatch } from "redux";
import { StoreState } from "../redux-common/store";
import { INCREMENT_ENERGY, DECREMENT_ENERGY } from "./types";

export const incrementEnergy = (energy: number): AppActions => ({
  type: INCREMENT_ENERGY,
  energy,
});

export const incrementHours = (energy: number) => ({
  type: DECREMENT_ENERGY,
  energy,
});