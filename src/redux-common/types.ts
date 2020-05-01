import { ClockActionTypes as ClockActions } from "../clock/types";
import { ResourceActionTypes as ResourceActions } from "../resources/types";
import { AttributeActionTypes as AttributeActions } from "../attributes/types";
import { MessageFeedActionTypes as MessageFeedActions } from "../message-feed/types";
import { InventoryActions } from "../inventory/types";
import { CombatActions } from "../player-actions/violence/types";

export const CLEAR_STORE = "CLEAR_STORE";

export interface ClearStoreAction {
  type: typeof CLEAR_STORE;
}

export type GeneralStoreActions = ClearStoreAction;

export type AppActions =
  | ClockActions
  | ResourceActions
  | AttributeActions
  | MessageFeedActions
  | GeneralStoreActions
  | InventoryActions
  | CombatActions;
