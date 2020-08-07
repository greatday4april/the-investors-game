const symbolsReducer = (state=["AAPL", "AMD", "AMZN"], action) => {
    switch (action.type) {
        default:
            return state;
    } 
} 

export default symbolsReducer;