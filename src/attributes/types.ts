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

export const INCREMENT_FITNESS = "INCREMENT_FITNESS";
export const DECREMENT_FITNESS = "DECREMENT_FITNESS";
export const INCREMENT_COMBAT = "INCREMENT_COMBAT";
export const DECREMENT_COMBAT = "DECREMENT_COMBAT";
export const INCREMENT_RESPECT = "INCREMENT_RESPECT";
export const DECREMENT_RESPECT = "DECREMENT_RESPECT";

export interface IncrementFitnessAction {
  type: typeof INCREMENT_FITNESS;
  fitnessProgress: Attributes["fitnessProgress"];
}

export interface DecrementFitnessAction {
  type: typeof DECREMENT_FITNESS;
  fitnessProgress: Attributes["fitnessProgress"];
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
  | IncrementFitnessAction
  | DecrementFitnessAction
  | IncrementCombatAction
  | DecrementCombatAction
  | IncrementRespectAction
  | DecrementRespectAction;
