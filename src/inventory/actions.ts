import { AppActions } from "../redux-common/types";
import { INCREMENT_TRADEABLE, INCREMENT_CASH } from "./types";

export const incrementTradeables = (tradeables: number): AppActions => ({
  type: INCREMENT_TRADEABLE,
  tradeables
});

export const incrementCash = (cash: number): AppActions => ({
  type: INCREMENT_CASH,
  cash
});
