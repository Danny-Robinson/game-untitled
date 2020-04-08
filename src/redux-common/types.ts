import { ClockActionTypes } from "../clock/types";
import { ResourceActionTypes } from "../resources/types";
import { AttributeActionTypes } from "../attributes/types";
import { MessageFeedActionTypes } from "../message-feed/types";

export const CLEAR_STORE = "CLEAR_STORE";

export interface ClearStoreAction {
  type: typeof CLEAR_STORE;
}

export type GeneralStoreActions = ClearStoreAction;

export type AppActions =
  | ClockActionTypes
  | ResourceActionTypes
  | AttributeActionTypes
  | MessageFeedActionTypes
  | GeneralStoreActions;
