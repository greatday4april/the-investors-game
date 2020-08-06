import axios from 'axios';
import {DEFAULT_NEWS_NUMBER} from './constants';
//data: Array(5)
// {
// date: "Fri, 15 Mar 2019 15:56:32 -0400"
// image_url: "https://cdn.snapi.dev/images/v1/m/q/mqdefault-289.jpg"
// news_url: "https://www.youtube.com/watch?v=PI-Pf0BtZK8"
// sentiment: "Neutral"
// source_name: "Bloomberg Technology"
// text: "Mar.15 -- Qualcomm Inc. won the first U.S. jury trial in its global dispute with Apple Inc. over how much the iPhone maker should pay for using the chipmaker’s patented technology. Bloomberg's Mark Gurman reports on "Bloomberg Markets: The Close.""
// }
export const fetchNewsItems = (tickers, date, items=DEFAULT_NEWS_NUMBER) => {
    return axios.get('https://stocknewsapi.com/api/v1', {
        params: {
            tickers, //'AAPL'
            date,//Use the date parameters to obtain historical news (up to March 2019). Please use the following format: MMDDYYY. You can also use today, yesterday, last7days, last30days, yeartodate .&date=03152019-03252019
            items,
            token: 'zw6vljb0afpvbu85djmvfbt0dnlpxykaf8oxwnrw'
        }
    })
}