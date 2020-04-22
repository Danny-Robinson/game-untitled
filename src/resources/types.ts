export interface Resources {
  energy: number;
  max_energy: number;
  health: number;
  max_health: number;
}

export const ALTER_ENERGY = "ALTER_ENERGY";

export interface AlterEnergyAction {
  type: typeof ALTER_ENERGY;
  energy: Resources["energy"];
}

export const ALTER_HEALTH = "ALTER_HEALTH";

export interface AlterHealthAction {
  type: typeof ALTER_HEALTH;
  health: Resources["health"];
}

export const ALTER_MAX_ENERGY = "ALTER_MAX_ENERGY";

export interface AlterMaxEnergyAction {
  type: typeof ALTER_MAX_ENERGY;
  max_energy: Resources["max_energy"];
}

export const ALTER_MAX_HEALTH = "ALTER_MAX_HEALTH";

export interface AlterMaxHealthAction {
  type: typeof ALTER_MAX_HEALTH;
  max_health: Resources["max_health"];
}

export type ResourceActionTypes =
  | AlterEnergyAction
  | AlterHealthAction
  | AlterMaxEnergyAction
  | AlterMaxHealthAction;
