export interface Resources {
  energy: number;
  health: number;
}

export const INCREMENT_ENERGY = "INCREMENT_ENERGY";
export const DECREMENT_ENERGY = "DECREMENT_ENERGY";

export interface IncrementEnergyAction {
  type: typeof INCREMENT_ENERGY;
  energy: Resources["energy"];
}

export interface DecrementEnergyAction {
  type: typeof DECREMENT_ENERGY;
  energy: Resources["energy"];
}

export type ResourceActionTypes = IncrementEnergyAction | DecrementEnergyAction;
