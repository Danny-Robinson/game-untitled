import { Item } from "./types";

export enum ItemName {
  ChocolateBar = "Chocolate Bar"
}

export type ItemNameList = ItemName.ChocolateBar;

export const chocolateBar: Item = {
  name: ItemName.ChocolateBar,
  buyPrice: 10,
  sellPrice: 3,
  weight: 1
};

export const itemList: { [N in ItemNameList]: Item } = {
  [ItemName.ChocolateBar]: chocolateBar
};
