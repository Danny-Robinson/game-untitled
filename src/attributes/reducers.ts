import { AppActions } from "../redux-common/types";
import { ALTER_ATTRIBUTE, AttributeNames, Attributes } from "./types";
import { attributesReducerDefaultState } from "../redux-common/default-store-state";

export function attributes(
  state = attributesReducerDefaultState,
  action: AppActions
): Attributes {
  switch (action.type) {
    case ALTER_ATTRIBUTE: {
      switch (action.attributeName) {
        case AttributeNames.fitnessProgress: {
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

        case AttributeNames.combatProgress: {
          const newCombatProgress =
            state.combatProgress + action.attributeChange;
          const combatProgress =
            newCombatProgress > 99
              ? newCombatProgress - 100
              : newCombatProgress < 0
              ? newCombatProgress + 100
              : newCombatProgress;
          const combat = state.combat + Math.floor(newCombatProgress / 100);
          return { ...state, combat, combatProgress };
        }

        case AttributeNames.notoriety: {
          const notoriety =
            action.attributeChange < state.notoriety
              ? state.notoriety
              : action.attributeChange >= state.notoriety
              ? action.attributeChange
              : action.attributeChange;
          const respect = notoriety * (state.combat + 1);
          return { ...state, respect, notoriety };
        }

        default:
          return state;
      }
    }
    default:
      return state;
  }
}
