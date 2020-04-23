import { Resources } from "../resources/types";
import { Clock } from "../clock/types";
import { Attributes } from "../attributes/types";
import { Inventory } from "../inventory/types";
import { ItemName } from "../inventory/items";

export const DEFAULT_MAX_ENERGY: number = 100;
export const DEFAULT_MAX_HEALTH: number = 100;
export const MIN_ENERGY: number = 0;
export const MIN_HEALTH: number = 0;

export const resourceReducerDefaultState: Resources = {
  max_energy: DEFAULT_MAX_ENERGY,
  energy: DEFAULT_MAX_ENERGY,
  health: 50,
  max_health: DEFAULT_MAX_HEALTH
};

export const clockReducerDefaultState: Clock = {
  minutes: 0,
  hours: 0,
  days: 0
};

export const attributesReducerDefaultState: Attributes = {
  fitness: 1,
  fitnessProgress: 0,
  combat: 1,
  combatProgress: 0,
  respect: 1,
  respectProgress: 0,
  notoriety: 0,
  mischief: 1
};

export const inventoryReducerDefaultState: Inventory = {
  items: { [ItemName.ChocolateBar]: 0, [ItemName.Bandage]: 0 },
  tradeables: 0,
  cash: 0
};
