import {
  ENTER_COMBAT,
  EXIT_COMBAT,
  LOAD_ENEMY,
  Enemy,
  ALTER_MOMENTUM,
  CombatAction,
  SELECT_PLAYER_COMBAT_ACTION,
  SELECT_ENEMY_COMBAT_ACTION,
  ALTER_ENEMY_HEALTH
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

export const selectPlayerCombatAction = (
  combatAction: CombatAction
): AppActions => ({
  type: SELECT_PLAYER_COMBAT_ACTION,
  combatAction
});

export const selectEnemyCombatAction = (
  combatAction: CombatAction
): AppActions => ({
  type: SELECT_ENEMY_COMBAT_ACTION,
  combatAction
});

export const alterEnemyHealth = (health: number): AppActions => ({
  type: ALTER_ENEMY_HEALTH,
  health
});
