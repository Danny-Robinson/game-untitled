import { Item } from "./types";
import { alterEnergy, alterHealth } from "../resources/actions";
import { removeItem } from "./actions";
import { addMessage } from "../message-feed/actions";

export enum ItemName {
  ChocolateBar = "Chocolate Bar",
  Bandage = "Bandage"
}

export type ItemNameList = ItemName.ChocolateBar | ItemName.Bandage;

export const chocolateBar: Item = {
  name: ItemName.ChocolateBar,
  buyPrice: 10,
  sellPrice: 3,
  weight: 1,
  onUseEffect: [
    alterEnergy(30),
    removeItem(ItemName.ChocolateBar),
    addMessage(`You ate a ${ItemName.ChocolateBar} and regained 60 energy`)
  ]
};

export const bandage: Item = {
  name: ItemName.Bandage,
  buyPrice: 10,
  sellPrice: 3,
  weight: 1,
  onUseEffect: [
    alterHealth(30),
    removeItem(ItemName.Bandage),
    addMessage(`You used a ${ItemName.Bandage} and regained 30 health`)
  ]
};

export const itemList: { [N in ItemNameList]: Item } = {
  [ItemName.ChocolateBar]: chocolateBar,
  [ItemName.Bandage]: bandage
};
