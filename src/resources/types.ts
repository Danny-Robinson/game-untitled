export interface Resources {
  energy: number;
}

export const ALTER_ENERGY = "ALTER_ENERGY";

export interface AlterEnergyAction {
  type: typeof ALTER_ENERGY;
  energy: Resources["energy"];
}

export type ResourceActionTypes = AlterEnergyAction;
