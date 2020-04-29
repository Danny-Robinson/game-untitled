import { AppActions } from "../../redux-common/types";
import {
  ENTER_COMBAT,
  EXIT_COMBAT,
  LOAD_ENEMY,
  ALTER_MOMENTUM,
  SelectedCombatActions,
  SELECT_COMBAT_ACTION
} from "./types";
import {
  resourceReducerDefaultState,
  selectedCombatActionsReducerDefaultState
} from "../../redux-common/default-store-state";
import { Resources } from "../../resources/types";

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

export function enemyResources(
  state = resourceReducerDefaultState,
  action: AppActions
): Resources {
  switch (action.type) {
    case LOAD_ENEMY:
      return {
        energy: action.enemy.energy,
        max_energy: action.enemy.max_energy,
        health: action.enemy.health,
        max_health: action.enemy.max_health
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

export function selectedCombatActions(
  state = selectedCombatActionsReducerDefaultState,
  action: AppActions
): SelectedCombatActions {
  switch (action.type) {
    case SELECT_COMBAT_ACTION:
      return { ...state, [action.actor]: action.combatAction };
    default:
      return state;
  }
}
