import { AppActions } from "../redux-common/types";
import { ALTER_ATTRIBUTE, AttributeNames, Attributes } from "./types";
import { attributesReducerDefaultState } from "../redux-common/default-store-state";

export function attributes(
  state = attributesReducerDefaultState,
  action: AppActions
): Attributes {
  switch (action.type) {
    case ALTER_ATTRIBUTE: {
      const attribute = action.attributeName;
      const newAttributeProgress = state[attribute] + action.attributeChange;
      const attributeProgress =
        newAttributeProgress > 99
          ? newAttributeProgress - 100
          : newAttributeProgress < 0
          ? newAttributeProgress + 100
          : newAttributeProgress;

      switch (action.attributeName) {
        case AttributeNames.fitnessProgress: {
          const fitness =
            state.fitness + Math.floor(newAttributeProgress / 100);
          const fitnessProgress = attributeProgress;
          return { ...state, fitness, fitnessProgress };
        }

        case AttributeNames.combatProgress: {
          const combat = state.combat + Math.floor(newAttributeProgress / 100);
          const combatProgress = attributeProgress;
          return { ...state, combat, combatProgress };
        }

        case AttributeNames.respectProgress: {
          const respect =
            state.respect + Math.floor(newAttributeProgress / 100);
          const respectProgress = attributeProgress;
          return { ...state, respect, respectProgress };
        }

        default:
          return state;
      }
    }

    default:
      return state;
  }
}
