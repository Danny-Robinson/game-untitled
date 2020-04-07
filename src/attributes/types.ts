export interface Attributes {
  fitness: number;
}

export const INCREMENT_FITNESS = "INCREMENT_FITNESS";
export const DECREMENT_FITNESS = "DECREMENT_FITNESS";

export interface IncrementFitnessAction {
  type: typeof INCREMENT_FITNESS;
  fitness: Attributes["fitness"];
}

export interface DecrementFitnessAction {
  type: typeof DECREMENT_FITNESS;
  fitness: Attributes["fitness"];
}

export type AttributeActionTypes = IncrementFitnessAction | DecrementFitnessAction;
