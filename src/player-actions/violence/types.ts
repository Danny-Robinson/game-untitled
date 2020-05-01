export interface Enemy {
  name: EnemyNames;
  energy: number;
  max_energy: number;
  health: number;
  max_health: number;
  moveList: ReadonlyArray<CombatAction>;
}

export interface CombatAction {
  name: string;
  speed: CombatActionSpeed;
  type: CombatActionType;
  damage: number;
}

export interface SelectedCombatActions {
  playerAction: CombatAction | null;
  enemyAction: CombatAction | null;
}

export enum CombatActionType {
  Offense = "Offense",
  Defense = "Defense"
}

export enum CombatActionSpeed {
  Fast = "Fast",
  Medium = "Medium",
  Slow = "Slow"
}

export enum EnemyNames {
  CrackFiend = "Crack Fiend"
}

export const ENTER_COMBAT = "ENTER_COMBAT";
export interface EnterCombatAction {
  type: typeof ENTER_COMBAT;
}

export const EXIT_COMBAT = "EXIT_COMBAT";
export interface ExitCombatAction {
  type: typeof EXIT_COMBAT;
}

export const LOAD_ENEMY = "LOAD_ENEMY";
export interface LoadEnemyAction {
  type: typeof LOAD_ENEMY;
  enemy: Enemy;
}

export const ALTER_MOMENTUM = "ALTER_MOMENTUM";
export interface AlterMomentumAction {
  type: typeof ALTER_MOMENTUM;
  momentum: number;
}

export const SELECT_COMBAT_ACTION = "SELECT_COMBAT_ACTION";
export interface SelectCombatActionAction {
  type: typeof SELECT_COMBAT_ACTION;
  combatAction: CombatAction;
  actor: "Player" | "Enemy";
}

export type CombatActions =
  | EnterCombatAction
  | ExitCombatAction
  | LoadEnemyAction
  | AlterMomentumAction
  | SelectCombatActionAction;
