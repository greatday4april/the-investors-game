import { HOURS_IN_DAY, MINUTES_IN_HOUR, MONTHS_IN_YEAR } from "../utils/constants";

import _ from 'lodash';
import { isHour } from "../utils/funcUtils";
import moment from 'moment-timezone';

export const getAllTicks = _.memoize((ticksTree) => {
    if (!ticksTree) return [];
    if (isHour(ticksTree)) return ticksTree.filter(tick => !!tick);
    const ticksArr = [];
    for (const subTree of ticksTree) {
        if (!subTree) continue;
        const subArr = getAllTicks(subTree);
        ticksArr.push(...subArr);
    }
    return ticksArr;
});

export const getTicksByTimeAndSymbol = _.memoize(({ ticks }, startTime, endTime, symbol) => {
    console.log('getTicksByTimeAndSymbol');
    ticks = ticks[symbol];
    if (!ticks) return [];
    startTime = startTime._isAMomentObject ? startTime : moment(startTime);
    endTime = startTime._isAMomentObject ? endTime : moment(endTime);

    const ticksArr = [];
    const startYear = startTime.year();
    const endYear = endTime.year();
    let startMonth, endMonth, startDate, endDate, startHour, endHour, startMin, endMin;
    for (let year = startYear; year <= endYear; year++) {
        if (!ticks[year]) continue;
        startMonth = year === startYear ? startTime.month() + 1 : 1;
        endMonth = year === endYear ? endTime.month() + 1 : MONTHS_IN_YEAR;
        for (let month = startMonth; month <= endMonth; month++) {
            if (!ticks[year][month]) continue;
            if (month !== startMonth && month !== endMonth) {
                ticksArr.push(...getAllTicks(ticks[year][month]));
                continue;
            }

            startDate = month === startMonth ? startTime.date() : 1;
            endDate = month === endMonth ? endTime.date() : moment([year, month - 1]).daysInMonth();
            for (let date = startDate; date <= endDate; date++) {
                if (!ticks[year][month][date]) continue;
                if (date !== startDate && date !== endDate) {
                    ticksArr.push(...getAllTicks(ticks[year][month][date]));
                    continue;
                }

                startHour = date === startDate ? startTime.hour() : 0;
                endHour = date === endDate ? endTime.hour() : HOURS_IN_DAY - 1;
                for (let hour = startHour; hour <= endHour; hour++) {
                    startMin = hour === startHour ? startTime.minute() : 0;
                    endMin = hour === endHour ? endTime.minute() : MINUTES_IN_HOUR - 1;
                    const hourData = ticks[year][month][date][hour];
                    if (!hourData) continue;
                    ticksArr.push(...hourData.slice(startMin, endMin + 1).filter(tick => !!tick))
                }
            }
        }
    }
    return ticksArr;
}, ({ _ticks }, startTime, endTime, symbol) => (JSON.stringify({ startTime: startTime.unix(), endTime: endTime.unix(), symbol })
));

window.getTicks = getTicksByTimeAndSymbol;
window.moment = moment;