import { AppActions } from "../redux-common/types";
import {
  Inventory,
  ADD_ITEM,
  INCREMENT_TRADEABLE,
  ALTER_CASH,
  REMOVE_ITEM
} from "./types";
import { inventoryReducerDefaultState } from "../redux-common/default-store-state";

export function inventory(
  state: Inventory = inventoryReducerDefaultState,
  action: AppActions
): Inventory {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.name]: state.items[action.item.name]
            ? state.items[action.item.name] + 1
            : 1
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item]: state.items[action.item]
            ? state.items[action.item] - 1
            : 0
        }
      };
    case INCREMENT_TRADEABLE:
      return { ...state, tradeables: state.tradeables + action.tradeables };
    case ALTER_CASH:
      return { ...state, cash: state.cash + action.cash };
    default:
      return state;
  }
}

export function stash(
  state = inventoryReducerDefaultState,
  action: AppActions
): Inventory {
  return state;
}
