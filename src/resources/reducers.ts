import { AppActions } from "../redux-common/types";
import { Resources, ALTER_ENERGY } from "./types";
import {
  resourceReducerDefaultState,
  MAX_ENERGY,
  MIN_ENERGY
} from "../redux-common/default-store-state";

export function resources(
  state = resourceReducerDefaultState,
  action: AppActions
): Resources {
  switch (action.type) {
    case ALTER_ENERGY: {
      const newEnergy = state.energy + action.energy;
      const energy =
        newEnergy >= MAX_ENERGY
          ? MAX_ENERGY
          : newEnergy < MIN_ENERGY
          ? MIN_ENERGY
          : newEnergy;

      return { ...state, energy };
    }

    default:
      return state;
  }
}
