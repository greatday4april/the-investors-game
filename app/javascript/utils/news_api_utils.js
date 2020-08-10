import axios from 'axios';
import {DEFAULT_NEWS_LIMIT} from './constants';
/**
 * data: Array(5)
 * Sample:
{
    "data": [
        {
            "news_url": "https://www.youtube.com/watch?v=OV1_6klsCG4&t=293s",
            "image_url": "https://cdn.snapi.dev/images/v1/p/d/pdtw5wt0aqv-1-1.jpg",
            "title": "Dan Niles explains why his hedge fund shorted Apple",
            "text": "Dan Niles, AlphaOne Capital Partners' founding partner, joins \"Squawk on the Street\" via phone to discuss the why his hedge fund shorted Apple.",
            "source_name": "CNBC Television",
            "date": "Mon, 04 Mar 2019 19:00:00 -0500",
            "topics": [],
            "sentiment": "Negative",
            "type": "Video",
            "tickers": [
            "AAPL"
            ]
        },
        {
            "news_url": "https://www.youtube.com/watch?v=3KlQVVdQ7mY",
            "image_url": "https://cdn.snapi.dev/images/v1/3/k/3klqvvdq7my.jpg",
            "title": "Apple's video plans put Bob Iger's board seat at risk",
            "text": "Apple Inc.’s foray into original TV shows and movies is increasing competition with Walt Disney Co., potentially putting Bob Iger’s board seat at risk.  Bloomberg's Mark Gurman has more on \"Bloomberg Technology.\"",
            "source_name": "Bloomberg Technology",
            "date": "Mon, 04 Mar 2019 19:00:00 -0500",
            "topics": [],
            "sentiment": "Positive",
            "type": "Video",
            "tickers": [
            "AAPL"
            ]
        }
    ]
}
 */
export const fetchNewsItems = (symbol, date, limit=DEFAULT_NEWS_LIMIT) => {
    return axios.get('https://stocknewsapi.com/api/v1', {
        params: {
            tickers: symbol, //'AAPL'
            date,//Use the date parameters to obtain historical news (up to March 2019). Please use the following format: MMDDYYY. You can also use today, yesterday, last7days, last30days, yeartodate .&date=03152019-03252019
            items: limit,
            token: 'zw6vljb0afpvbu85djmvfbt0dnlpxykaf8oxwnrw'
        }
    })
}