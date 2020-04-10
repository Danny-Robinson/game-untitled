import { AppActions } from "../redux-common/types";
import { ADD_TRADEABLE } from "./types";

export const addTradeable = (tradeables: number): AppActions => ({
  type: ADD_TRADEABLE,
  tradeables
});
