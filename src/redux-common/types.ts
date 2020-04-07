import { ClockActionTypes } from "../clock/types";
import { ResourceActionTypes } from "../resources/types";
import { AttributeActionTypes } from "../attributes/types";

export type AppActions = ClockActionTypes | ResourceActionTypes | AttributeActionTypes;
