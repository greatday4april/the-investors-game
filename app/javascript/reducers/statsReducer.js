const preloadedStats = {
    AAPL: {
        "CEO": "Timothy Cook",
        "Employees": "137, 000",
        "Headquarters": "Cupertino, CA",
        "Founded": "1976",
        "Market Cap": "1.90T",
        "Earnings Ratio": "33.78",
        "Dividend Yield": "0.70",
        "Average Volume": "46.17M",
        "Health": 3,
        "Dividend": 0,
        "Value":0,
        "Future": 2,
        "Past": 4
    },
    AMZN: {
        "CEO": "Jeffrey Bezos",
        "Employees": "798, 000",
        "Headquarters": "Seattle, WA",
        "Founded": "1994",
        "Market Cap": "1.59T",
        "Earnings Ratio": "121.75",
        "Dividend Yield": "—",
        "Average Volume": "4.60M",
        "Health": 5,
        "Dividend": 0,
        "Value": 0,
        "Future": 5,
        "Past": 3,
    },
    AMD: {
        "CEO": "Lisa T.Su",
        "Employees": "11, 400",
        "Headquarters": "Santa Clara, CA",
        "Founded": "1969",
        "Market Cap": "99.62B",
        "Earnings Ratio": "166.11",
        "Dividend Yield": "—",
        "Average Volume": "87.14M",
        "Health": 6,
        "Dividend": 0,
        "Value": 0,
        "Future": 5,
        "Past": 4
    }
}

const statsReducer = (state = preloadedStats, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default statsReducer;