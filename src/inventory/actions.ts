import { AppActions } from "../redux-common/types";
import {
  INCREMENT_TRADEABLE,
  ALTER_CASH,
  ADD_ITEM,
  Item,
  REMOVE_ITEM
} from "./types";

export const incrementTradeables = (tradeables: number): AppActions => ({
  type: INCREMENT_TRADEABLE,
  tradeables
});

export const alterCash = (cash: number): AppActions => ({
  type: ALTER_CASH,
  cash
});

export const addItem = (item: Item): AppActions => ({
  type: ADD_ITEM,
  item
});

export const removeItem = (item: Item): AppActions => ({
  type: REMOVE_ITEM,
  item
});
