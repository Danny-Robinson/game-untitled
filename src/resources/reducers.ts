import { AppActions } from "../redux-common/types";
import { Resources, INCREMENT_ENERGY, DECREMENT_ENERGY } from "./types";

const MAX_ENERGY: number = 100;
const MIN_ENERGY: number = 0;
const clockReducerDefaultState: Resources = { energy: MAX_ENERGY };

export function resources(
  state = clockReducerDefaultState,
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
