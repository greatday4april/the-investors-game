import moment from 'moment-timezone';
export const MONTHS_IN_YEAR = 12;
export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;

export const WARPED_TIME_RATIO = 100.0;
export const FRAMES_PER_SEC = 24;

export const ONE_YEAR_DURATION = moment.duration({ years: 1 });
export const SIX_MONTHS_DURATION = moment.duration({ months: 6 });
export const ONE_MONTH_DURATION = moment.duration({ months: 1 });
export const ONE_WEEK_DURATION = moment.duration({ weeks: 1 });
export const ONE_DAY_DURATION = moment.duration({ days: 1 });

export const DEFAULT_WARPED_TIME = moment([2009, 2, 5, 9]);
export const GAME_START_TIME = moment([2009, 0, 1, 9]);
export const INITIAL_BALANCE = 10000;
export const DEFAULT_NEWS_LIMIT = 5;

export const REWARD_STOCK = { symbol: 'AAPL', share: 500, price: 0 };
export const REWARD_MONEY_AMOUNT = 1000;

export const LEVELS = [50000, 100000, 200000, 400000];
