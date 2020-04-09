import { AppActions } from "../redux-common/types";
import { Resources, INCREMENT_ENERGY, DECREMENT_ENERGY } from "./types";
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
    case INCREMENT_ENERGY: {
      const energy =
        state.energy + action.energy > MAX_ENERGY
          ? MAX_ENERGY
          : state.energy + action.energy;
      return { ...state, energy };
    }

    case DECREMENT_ENERGY: {
      const energy =
        state.energy - action.energy < MIN_ENERGY
          ? MIN_ENERGY
          : state.energy - action.energy;
      return { ...state, energy };
    }

    default:
      return state;
  }
}
