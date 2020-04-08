export const ADD_MESSAGE = "ADD_MESSAGE";

export interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  message: string;
}

export type MessageFeedActionTypes = AddMessageAction;
