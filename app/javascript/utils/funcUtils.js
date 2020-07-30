import { MINUTES_IN_HOUR } from "./constants";

export const isTick = (obj) => { return !!(obj.tick_time) };

export const isHour = (arr) => { return arr.length === MINUTES_IN_HOUR};