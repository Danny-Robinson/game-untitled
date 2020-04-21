import { Item } from "./types";
import { alterEnergy } from "../resources/actions";
import { removeItem } from "./actions";
import { addMessage } from "../message-feed/actions";

export enum ItemName {
  ChocolateBar = "Chocolate Bar"
}

export type ItemNameList = ItemName.ChocolateBar;

export const chocolateBar: Item = {
  name: ItemName.ChocolateBar,
  buyPrice: 10,
  sellPrice: 3,
  weight: 1,
  onUseEffect: [
    alterEnergy(60),
    removeItem(ItemName.ChocolateBar),
    addMessage(`You ate a ${ItemName.ChocolateBar} and regained 60 energy`)
  ]
};

export const itemList: { [N in ItemNameList]: Item } = {
  [ItemName.ChocolateBar]: chocolateBar
};
