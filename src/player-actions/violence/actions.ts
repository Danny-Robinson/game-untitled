import {
  ENTER_COMBAT,
  EXIT_COMBAT,
  LOAD_ENEMY,
  Enemy,
  ALTER_MOMENTUM,
  CombatAction,
  SELECT_COMBAT_ACTION
} from "./types";
import { AppActions } from "../../redux-common/types";

export const enterCombat = (): AppActions => ({
  type: ENTER_COMBAT
});

export const exitCombat = (): AppActions => ({
  type: EXIT_COMBAT
});

export const loadEnemy = (enemy: Enemy): AppActions => ({
  type: LOAD_ENEMY,
  enemy
});

export const alterMomentum = (momentum: number): AppActions => ({
  type: ALTER_MOMENTUM,
  momentum
});

export const selectCombatAction = (
  combatAction: CombatAction,
  actor: "Player" | "Enemy"
): AppActions => ({
  type: SELECT_COMBAT_ACTION,
  combatAction,
  actor
});
