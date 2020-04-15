import { AppActions } from "../redux-common/types";
import {
  INCREMENT_COMBAT,
  DECREMENT_COMBAT,
  ALTER_ATTRIBUTE,
  AttributeNames
} from "./types";

export const incrementCombat = (combatProgress: number): AppActions => ({
  type: INCREMENT_COMBAT,
  combatProgress
});

export const decrementCombat = (combatProgress: number): AppActions => ({
  type: DECREMENT_COMBAT,
  combatProgress
});

export const alterAttribute = (
  attributeChange: number,
  attributeName: AttributeNames
): AppActions => ({
  type: ALTER_ATTRIBUTE,
  attributeChange,
  attributeName
});
