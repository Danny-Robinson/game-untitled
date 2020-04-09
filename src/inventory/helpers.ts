import { Tradeable } from "./types";

export const convertTradeablesToText = (tradeables: number) => {
  const stamps = tradeables % 10;
  const stampsString = `${stamps} ${Tradeable.Stamp}${stamps !== 1 ? "s" : ""}`;
  const cigs = Math.floor((tradeables % 100) / 10);
  const cigsString = `, ${cigs} ${Tradeable.Cig}${cigs !== 1 ? "s" : ""}`;
  const ramen = Math.floor((tradeables % 1000) / 100);
  const ramenString = `, ${ramen} ${Tradeable.Ramen}`;

  return `${stampsString}${cigs ? cigsString : ""}${ramen ? ramenString : ""}`;
};
