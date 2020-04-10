import { Resources } from "../resources/types";
import { Clock } from "../clock/types";
import { Attributes } from "../attributes/types";
import { Inventory } from "../inventory/types";

export const MAX_ENERGY: number = 100;
export const MIN_ENERGY: number = 0;
export const resourceReducerDefaultState: Resources = { energy: MAX_ENERGY };

export const clockReducerDefaultState: Clock = {
  minutes: 0,
  hours: 0,
  days: 0
};

export const attributesReducerDefaultState: Attributes = {
  fitness: 1,
  fitnessProgress: 0
};

export const inventoryReducerDefaultState: Inventory = {
  items: {},
  tradeables: 0
};
