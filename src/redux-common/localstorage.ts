import { StoreState } from "./store";

export const loadState = () => {
  try {
    const state = localStorage.getItem("state");
    console.log("loading state");
    console.log(state);
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: StoreState) => {
  try {
    console.log("saving");
    console.log(JSON.stringify(state));
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    return;
  }
};
