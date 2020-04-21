export interface Attributes {
  fitness: number;
  fitnessProgress: number;
  combat: number;
  combatProgress: number;
  notoriety: number;
  respect: number;
  respectProgress: number;
  mischief: number;
}

export enum AttributeNames {
  fitness = "fitness",
  fitnessProgress = "fitnessProgress",
  combat = "combat",
  combatProgress = "combatProgress",
  notoriety = "notoriety",
  respect = "respect",
  respectProgress = "respectProgress",
  mischief = "mischief"
}

export const ALTER_ATTRIBUTE = "ALTER_ATTRIBUTE";

export interface AlterAttributeAction {
  type: typeof ALTER_ATTRIBUTE;
  attributeChange: number;
  attributeName: AttributeNames;
}

export type AttributeActionTypes = AlterAttributeAction;
