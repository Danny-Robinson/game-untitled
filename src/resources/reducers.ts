import { AppActions } from "../redux-common/types";
import { Resources, INCREMENT_ENERGY, DECREMENT_ENERGY } from "./types";

const clockReducerDefaultState: Resources = { energy: 100 };

export function resources(
  state = clockReducerDefaultState,
  action: AppActions
): Resources {
  switch (action.type) {
    case INCREMENT_ENERGY: {
      const energy = (state.energy +=
        action.energy > 100 ? 100 : (state.energy += action.energy));
      return { ...state, energy };
    }
    case DECREMENT_ENERGY:
      const energy = (state.energy -=
        action.energy < 0 ? 0 : (state.energy -= action.energy));
      return { ...state, energy };
    default:
      return state;
  }
}
