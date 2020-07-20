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
  speedValue: number;
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
  Unknown = "Unknown",
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

export const SELECT_PLAYER_COMBAT_ACTION = "SELECT_PLAYER_COMBAT_ACTION";
export interface SelectPlayerCombatActionAction {
  type: typeof SELECT_PLAYER_COMBAT_ACTION;
  combatAction: CombatAction;
}

export const SELECT_ENEMY_COMBAT_ACTION = "SELECT_ENEMY_COMBAT_ACTION";
export interface SelectEnemyCombatActionAction {
  type: typeof SELECT_ENEMY_COMBAT_ACTION;
  combatAction: CombatAction;
}

export const ALTER_ENEMY_HEALTH = "ALTER_ENEMY_HEALTH";
export interface AlterEnemyHealthAction {
  type: typeof ALTER_ENEMY_HEALTH;
  health: number;
}

export type CombatActions =
  | EnterCombatAction
  | ExitCombatAction
  | LoadEnemyAction
  | AlterMomentumAction
  | SelectPlayerCombatActionAction
  | SelectEnemyCombatActionAction
  | AlterEnemyHealthAction;
