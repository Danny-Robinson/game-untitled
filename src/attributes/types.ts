export interface Attributes {
  fitness: number;
  fitnessProgress: number;
  combat: number;
  combatProgress: number;
  notoriety: number;
  respect: number;
  respectProgress: number;
  mischief: number;
}

export enum AttributeNames {
  Fitness = "Fitness",
  FitnessProgress = "FitnessProgress",
  Combat = "Combat",
  CombatProgress = "CombatProgress",
  Notoriety = "Notoriety",
  Respect = "Respect",
  RespectProgress = "RespectProgress",
  Mischief = "Mischief"
}

export const ALTER_ATTRIBUTE = "ALTER_ATTRIBUTE";

export const INCREMENT_COMBAT = "INCREMENT_COMBAT";
export const DECREMENT_COMBAT = "DECREMENT_COMBAT";
export const INCREMENT_RESPECT = "INCREMENT_RESPECT";
export const DECREMENT_RESPECT = "DECREMENT_RESPECT";

export interface AlterAttributeAction {
  type: typeof ALTER_ATTRIBUTE;
  attributeChange: number;
  attributeName: AttributeNames;
}

export interface IncrementCombatAction {
  type: typeof INCREMENT_COMBAT;
  combatProgress: Attributes["combatProgress"];
}

export interface DecrementCombatAction {
  type: typeof DECREMENT_COMBAT;
  combatProgress: Attributes["combatProgress"];
}

export interface IncrementRespectAction {
  type: typeof INCREMENT_RESPECT;
  respectProgress: Attributes["respectProgress"];
}

export interface DecrementRespectAction {
  type: typeof DECREMENT_RESPECT;
  respectProgress: Attributes["respectProgress"];
}

export type AttributeActionTypes =
  | IncrementCombatAction
  | DecrementCombatAction
  | IncrementRespectAction
  | DecrementRespectAction
  | AlterAttributeAction;
