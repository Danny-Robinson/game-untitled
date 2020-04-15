import { AttributeNames } from "../attributes/types";

export type Item = {
  name: string;
  buyPrice: number;
  sellPrice: number;
  size: number;
} & (Consumable | Equippable);

export interface Consumable {
  onUseEffect?: () => void;
}

export interface Equippable {
  slot: ReadonlyArray<EquipableSlot>;
  bonus: ReadonlyArray<EquippedBonus>;
}

export interface Inventory {
  items: { [name: string]: number };
  tradeables: number; //111 = 1 ramen, 1 cig, 1 stamp
  cash: number;
}

export enum Tradeable {
  Stamp = "Stamp",
  Cig = "Cig",
  Ramen = "Ramen"
}

export const tradeableValue = {
  [Tradeable.Stamp]: 1,
  [Tradeable.Cig]: 10,
  [Tradeable.Ramen]: 100
};

export interface EquippedBonus {
  attribute: AttributeNames;
  amount: number;
}

export enum EquipableSlot {
  Head = "Head",
  Chest = "Chest",
  Legs = "Legs",
  Feet = "Feet",
  Hand1 = "Hand1",
  Hand2 = "Hand2"
}

export const ADD_ITEM = "ADD_ITEM";
export interface AddItemAction {
  type: typeof ADD_ITEM;
  item: Item;
}

export const INCREMENT_TRADEABLE = "INCREMENT_TRADEABLE";
export interface IncrementTradeableAction {
  type: typeof INCREMENT_TRADEABLE;
  tradeables: number;
}

export const INCREMENT_CASH = "INCREMENT_CASH";
export interface IncrementCashAction {
  type: typeof INCREMENT_CASH;
  cash: number;
}

export type InventoryActions =
  | AddItemAction
  | IncrementTradeableAction
  | IncrementCashAction;
