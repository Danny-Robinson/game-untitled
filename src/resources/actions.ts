import { AppActions } from "../redux-common/types";
import { ALTER_ENERGY } from "./types";

export const alterEnergy = (energy: number): AppActions => ({
  type: ALTER_ENERGY,
  energy
});
