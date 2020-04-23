import { AppActions } from "../redux-common/types";
import { ALTER_ENERGY, ALTER_HEALTH } from "./types";

export const alterEnergy = (energy: number): AppActions => ({
  type: ALTER_ENERGY,
  energy
});

export const alterHealth = (health: number): AppActions => ({
  type: ALTER_HEALTH,
  health
});
