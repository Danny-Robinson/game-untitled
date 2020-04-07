import { AppActions } from "../redux-common/types";
import { Attributes, INCREMENT_FITNESS, DECREMENT_FITNESS } from "./types";

const attributesReducerDefaultState: Attributes = { fitness: 1 };

export function attributes(
  state = attributesReducerDefaultState,
  action: AppActions
): Attributes {
  switch (action.type) {
    case INCREMENT_FITNESS: {
      const fitness = state.fitness + action.fitness;
      console.log(fitness);
      return { ...state, fitness };
    }

    case DECREMENT_FITNESS: {
      const fitness = state.fitness - action.fitness;
      return { ...state, fitness };
    }
    
    default:
      return state;
  }
}
