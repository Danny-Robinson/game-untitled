import { AppActions } from "../redux-common/types";
import { Resources, ALTER_ENERGY, ALTER_HEALTH } from "./types";
import {
  resourceReducerDefaultState,
  MIN_ENERGY,
  MIN_HEALTH
} from "../redux-common/default-store-state";

export function resources(
  state = resourceReducerDefaultState,
  action: AppActions
): Resources {
  switch (action.type) {
    case ALTER_ENERGY:
      const newEnergy = state.energy + action.energy;
      const energy =
        newEnergy >= state.max_energy
          ? state.max_energy
          : newEnergy < MIN_ENERGY
          ? MIN_ENERGY
          : newEnergy;

      return { ...state, energy };

    case ALTER_HEALTH:
      const newHealth = state.health + action.health;
      const health =
        newHealth >= state.max_health
          ? state.max_health
          : newHealth < MIN_HEALTH
          ? MIN_HEALTH
          : newHealth;

      return { ...state, health };

    default:
      return state;
  }
}
