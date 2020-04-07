export interface Attributes {
  fitness: number;
  fitnessProgress: number;
}

export const INCREMENT_FITNESS = "INCREMENT_FITNESS";
export const DECREMENT_FITNESS = "DECREMENT_FITNESS";

export interface IncrementFitnessAction {
  type: typeof INCREMENT_FITNESS;
  fitness: Attributes["fitness"];
  fitnessProgress: Attributes["fitnessProgress"];
}

export interface DecrementFitnessAction {
  type: typeof DECREMENT_FITNESS;
  fitness: Attributes["fitness"];
  fitnessProgress: Attributes["fitnessProgress"];
}

export type AttributeActionTypes =
  | IncrementFitnessAction
  | DecrementFitnessAction;
