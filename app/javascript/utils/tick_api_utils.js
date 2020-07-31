import axios from 'axios';

export const fetchAllTicks = (startTime, endTime, symbols) => {
    return axios.get('/api/ticks', {
        params: {
            start_time: startTime,
            end_time: endTime,
            symbols: symbols // array of symbols
        }
    })
}