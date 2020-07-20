import { takeEvery, put, all, select } from "redux-saga/effects";
import {
  ENTER_COMBAT,
  CombatAction,
  SELECT_PLAYER_COMBAT_ACTION,
  SELECT_ENEMY_COMBAT_ACTION,
  SelectEnemyCombatActionAction,
  CombatActionType,
  AlterEnemyHealthAction,
  ALTER_ENEMY_HEALTH,
  AlterMomentumAction,
  ALTER_MOMENTUM
} from "../player-actions/violence/types";
import { AddMessageAction, ADD_MESSAGE } from "../message-feed/types";
import { StoreState } from "../redux-common/store";
import { enemyCombatantReducerDefaultState } from "../redux-common/default-store-state";
import _ from "lodash";
import { AlterHealthAction, ALTER_HEALTH } from "../resources/types";

function* combatActionListener() {
  yield takeEvery(SELECT_PLAYER_COMBAT_ACTION, resolveCombatTurn);
}

function* resolveCombatTurn() {
  yield reportSelectedAction();
  yield reportEnemyAction();
  yield calculateDamage();
  yield selectEnemyAction();
}

function* calculateDamage() {
  const playerSelectedCombatAction = yield select((state: StoreState) =>
    state ? state.playerSelectedCombatAction : null
  );
  const enemySelectedCombatAction = yield select((state: StoreState) =>
    state ? state.enemySelectedCombatAction : null
  );
  const momentum = yield select((state: StoreState) =>
    state ? state.momentum : 0
  );

  const playerAction: CombatAction = playerSelectedCombatAction;
  const enemyAction: CombatAction = enemySelectedCombatAction;

  const counter = calculateCounter(playerAction, enemyAction);

  if (counter === -2) {
    yield sendMessage(`${playerAction.name} counters ${enemyAction.name}`);
  } else if (counter === 2) {
    yield sendMessage(`${enemyAction.name} counters ${playerAction.name}`);
  }

  const outcomeValue =
    enemyAction.speedValue - playerAction.speedValue + counter + momentum;

  if (outcomeValue < 0 && playerAction.type === CombatActionType.Offense) {
    yield dealDamage(playerAction.damage, "Enemy");
    yield alterMomentum(-1);
    yield sendMessage(
      `Your attack landed dealing ${playerAction.damage} damage. You gain 1 momentum`
    );
  } else if (
    outcomeValue > 0 &&
    enemyAction.type === CombatActionType.Offense
  ) {
    yield dealDamage(enemyAction.damage, "Player");
    yield alterMomentum(1);
    yield sendMessage(
      `Enemy attack landed dealing ${enemyAction.damage} damage. You lose 1 momentum`
    );
  } else {
    yield clashCheck(playerAction, enemyAction);
    yield defenseCheck(playerAction, enemyAction);
  }
}

function* reportSelectedAction() {
  const playerSelectedCombatAction = yield select((state: StoreState) =>
    state ? state.playerSelectedCombatAction : null
  );

  yield sendMessage(`You choose to ${playerSelectedCombatAction.name}.`);
}

function* reportEnemyAction() {
  const enemySelectedCombatAction = yield select((state: StoreState) =>
    state ? state.enemySelectedCombatAction : null
  );

  const enemyCombatant = yield select((state: StoreState) =>
    state ? state.enemyCombatant : enemyCombatantReducerDefaultState
  );

  yield sendMessage(
    `${enemyCombatant.name} chose to ${enemySelectedCombatAction.name}.`
  );
}

function* enterCombatListener() {
  yield takeEvery(ENTER_COMBAT, selectEnemyAction);
}

function* selectEnemyAction() {
  const enemyCombatant = yield select((state: StoreState) =>
    state ? state.enemyCombatant : enemyCombatantReducerDefaultState
  );

  const selectedMove = _.sample(enemyCombatant.moveList);
  const selectEnemyMoveAction: SelectEnemyCombatActionAction = {
    type: SELECT_ENEMY_COMBAT_ACTION,
    combatAction: selectedMove
  };
  yield put(selectEnemyMoveAction);

  const telegraphRoll = Math.random();
  if (telegraphRoll > 0.7) {
    yield sendMessage(
      `${enemyCombatant.name} is about to ${selectedMove.name}`
    );
  } else {
    yield sendMessage(`${enemyCombatant.name} disguises their attack`);
  }
}

const calculateCounter = (
  playerAction: CombatAction,
  enemyAction: CombatAction
): number => {
  if (playerAction.type === enemyAction.type) {
    return 0;
  } else if (playerAction.speed === enemyAction.speed) {
    if (playerAction.type === CombatActionType.Defense) {
      return -2;
    } else if (enemyAction.type === CombatActionType.Defense) {
      return 2;
    }
  }
  return 0;
};

function* dealDamage(damage: number, reciever: "Player" | "Enemy") {
  const damageAction: AlterHealthAction | AlterEnemyHealthAction = {
    type: reciever === "Player" ? ALTER_HEALTH : ALTER_ENEMY_HEALTH,
    health: damage * -1
  };

  yield put(damageAction);
}

function* alterMomentum(momentum: number) {
  const alterMomentumAction: AlterMomentumAction = {
    type: ALTER_MOMENTUM,
    momentum
  };

  yield put(alterMomentumAction);
}

function* defenseCheck(playerAction: CombatAction, enemyAction: CombatAction) {
  if (playerAction.type === enemyAction.type) return;
  if (playerAction.type === CombatActionType.Defense) {
    yield alterMomentum(-1);
    yield sendMessage(`Successful defense, gain 1 momentum`);
  } else if (enemyAction.type === CombatActionType.Defense) {
    yield alterMomentum(1);
    yield sendMessage(`Successful enemy defense, lose 1 momentum`);
  }
}

function* clashCheck(playerAction: CombatAction, enemyAction: CombatAction) {
  if (
    playerAction.type === CombatActionType.Offense &&
    enemyAction.type === CombatActionType.Offense
  ) {
    yield dealDamage(playerAction.damage, "Enemy");
    yield dealDamage(enemyAction.damage, "Player");
    yield sendMessage(
      `Both attacks land, you deal ${playerAction.damage} damage and take ${enemyAction.damage}`
    );
  }
}

function* sendMessage(message: string) {
  const messageAction: AddMessageAction = {
    type: ADD_MESSAGE,
    message
  };
  yield put(messageAction);
}

export default function* rootSaga() {
  yield all([combatActionListener(), enterCombatListener()]);
}
