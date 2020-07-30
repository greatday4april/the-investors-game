import axios from 'axios';

export const fetchAllTicks = (start_time, period, symbols) => {
    return axios.get('/api/ticks', {
        params: {
            start_time: start_time,
            period: period,
            symbols: symbols // array of symbols
        }
    })
}