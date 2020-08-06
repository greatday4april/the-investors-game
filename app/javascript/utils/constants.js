import moment from "moment-timezone";
export const MONTHS_IN_YEAR = 12;
export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;

export const WARPED_TIME_RATIO = 100.0;
export const FRAMES_PER_SEC = 24

export const ONE_YEAR_DURATION = moment.duration({ years: 1 });
export const SIX_MONTHS_DURATION = moment.duration({ months: 6 });
export const ONE_MONTH_DURATION = moment.duration({ months: 1 });
export const ONE_WEEK_DURATION = moment.duration({ weeks: 1 });
export const ONE_DAY_DURATION = moment.duration({ days: 1 });

export const DEFAULT_WARPED_TIME = moment([2009, 2, 5, 9]);
export const DEFAULT_NEWS_NUMBER = 5;