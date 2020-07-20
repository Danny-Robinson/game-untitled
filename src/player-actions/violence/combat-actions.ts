import { CombatAction, CombatActionType, CombatActionSpeed } from "./types";

export const jab: CombatAction = {
  name: "Jab",
  type: CombatActionType.Offense,
  speed: CombatActionSpeed.Fast,
  damage: 5,
  speedValue: 3
};

export const parry: CombatAction = {
  name: "Parry",
  type: CombatActionType.Defense,
  speed: CombatActionSpeed.Fast,
  damage: 0,
  speedValue: 1
};

export const scratch: CombatAction = {
  name: "Scratch",
  type: CombatActionType.Offense,
  speed: CombatActionSpeed.Fast,
  damage: 2,
  speedValue: 3
};

export const swingWildly: CombatAction = {
  name: "Swing wildly",
  type: CombatActionType.Offense,
  speed: CombatActionSpeed.Slow,
  damage: 10,
  speedValue: 2
};
