import { AppActions } from "../redux-common/types";
import { ALTER_ATTRIBUTE, AttributeNames } from "./types";

export const alterAttribute = (
  attributeChange: number,
  attributeName: AttributeNames
): AppActions => ({
  type: ALTER_ATTRIBUTE,
  attributeChange,
  attributeName
});
