import { Enemy, EnemyNames } from "./types";
import { swingWildly, scratch } from "./combat-actions";

export const crackFiend: Enemy = {
  name: EnemyNames.CrackFiend,
  energy: 30,
  max_energy: 100,
  health: 40,
  max_health: 40,
  moveList: [scratch, swingWildly]
};
