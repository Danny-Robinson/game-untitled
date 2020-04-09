import { StoreState } from "./store";

export const loadState = () => {
  try {
    const state = localStorage.getItem("state");
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (error) {
    window.alert("Enable browser local storage to allow auto-saving");
    return undefined;
  }
};

export const saveState = (state: StoreState) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    return;
  }
};
