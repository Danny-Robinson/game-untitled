import { ClockActionTypes } from "../clock/types";
import { ResourceActionTypes } from "../resources/types";
import { AttributeActionTypes } from "../attributes/types";
import { MessageFeedActionTypes } from "../message-feed/types";

export type AppActions =
  | ClockActionTypes
  | ResourceActionTypes
  | AttributeActionTypes
  | MessageFeedActionTypes;
