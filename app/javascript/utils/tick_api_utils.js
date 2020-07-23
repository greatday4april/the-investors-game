import axios from 'axios';
export const fetchAllTicks = (start_time, period) => {
    console.log(start_time);
    return axios.get('/api/ticks', {
        params: {
            start_time: start_time,
            period: period
        }
    })
}