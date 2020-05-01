import { AppActions } from "../../redux-common/types";
import {
  ENTER_COMBAT,
  EXIT_COMBAT,
  LOAD_ENEMY,
  ALTER_MOMENTUM,
  Enemy,
  CombatAction,
  SELECT_PLAYER_COMBAT_ACTION,
  SELECT_ENEMY_COMBAT_ACTION,
  ALTER_ENEMY_HEALTH
} from "./types";
import { enemyCombatantReducerDefaultState } from "../../redux-common/default-store-state";

export function inCombat(state: boolean = false, action: AppActions): boolean {
  switch (action.type) {
    case ENTER_COMBAT:
      return true;
    case EXIT_COMBAT:
      return false;
    default:
      return state;
  }
}

export function enemyCombatant(
  state = enemyCombatantReducerDefaultState,
  action: AppActions
): Enemy {
  switch (action.type) {
    case LOAD_ENEMY:
      return {
        ...action.enemy
      };
    case ALTER_ENEMY_HEALTH:
      const newHealth = state.health + action.health;
      return {
        ...state,
        health:
          newHealth > state.max_health
            ? state.max_health
            : newHealth < 0
            ? 0
            : newHealth
      };
    default:
      return state;
  }
}

export function momentum(state = 0, action: AppActions): number {
  // -5 is momentum in favour of player, 0 neutral, 5 is against player
  switch (action.type) {
    case ALTER_MOMENTUM:
      const newMomentum = state + action.momentum;
      return newMomentum < -5 ? -5 : newMomentum > 5 ? 5 : newMomentum;
    default:
      return state;
  }
}

export function playerSelectedCombatAction(
  state = null,
  action: AppActions
): CombatAction | null {
  switch (action.type) {
    case SELECT_PLAYER_COMBAT_ACTION:
      return action.combatAction;
    default:
      return state;
  }
}

export function enemySelectedCombatAction(
  state = null,
  action: AppActions
): CombatAction | null {
  switch (action.type) {
    case SELECT_ENEMY_COMBAT_ACTION:
      return action.combatAction;
    default:
      return state;
  }
}
