import { AppActions } from "../redux-common/types";
import {
  Attributes,
  INCREMENT_COMBAT,
  DECREMENT_COMBAT,
  INCREMENT_RESPECT,
  DECREMENT_RESPECT,
  ALTER_ATTRIBUTE,
  AttributeNames
} from "./types";
import { attributesReducerDefaultState } from "../redux-common/default-store-state";

export function attributes(
  state = attributesReducerDefaultState,
  action: AppActions
): Attributes {
  switch (action.type) {
    case INCREMENT_COMBAT: {
      const newCombatProgress = state.combatProgress + action.combatProgress;
      const combatProgress =
        newCombatProgress > 99 ? newCombatProgress - 100 : newCombatProgress;
      const combat = state.combat + Math.floor(newCombatProgress / 100);
      return { ...state, combat, combatProgress };
    }

    case DECREMENT_COMBAT: {
      const newCombatProgress = state.combatProgress - action.combatProgress;
      const combatProgress =
        newCombatProgress < 0 ? newCombatProgress - 100 : newCombatProgress;
      const combat = state.combat + Math.floor(newCombatProgress / 100);
      return { ...state, combat, combatProgress };
    }

    case ALTER_ATTRIBUTE: {
      switch (action.attributeName) {
        case AttributeNames.FitnessProgress: {
          const newFitnessProgress =
            state.fitnessProgress + action.attributeChange;
          const fitnessProgress =
            newFitnessProgress > 99
              ? newFitnessProgress - 100
              : newFitnessProgress < 0
              ? newFitnessProgress + 100
              : newFitnessProgress;
          const fitness = state.fitness + Math.floor(newFitnessProgress / 100);
          return { ...state, fitness, fitnessProgress };
        }

        default:
          return state;
      }
    }

    default:
      return state;
  }
}
