import { AppActions } from "../redux-common/types";
import { Attributes, INCREMENT_FITNESS, DECREMENT_FITNESS } from "./types";

const attributesReducerDefaultState: Attributes = {
  fitness: 1,
  fitnessProgress: 0
};

export function attributes(
  state = attributesReducerDefaultState,
  action: AppActions
): Attributes {
  switch (action.type) {
    case INCREMENT_FITNESS: {
      const newFitnessProgress = state.fitnessProgress + action.fitnessProgress;
      const fitnessProgress =
        newFitnessProgress > 99 ? newFitnessProgress - 100 : newFitnessProgress;
      const fitness = state.fitness + Math.floor(newFitnessProgress / 100);
      return { ...state, fitness, fitnessProgress };
    }

    default:
      return state;
  }
}
