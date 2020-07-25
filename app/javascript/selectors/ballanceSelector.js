export const ballanceSelector = (currentBallance, ownedStocks) => {
    if (ownedStocks.length === 0) {
        return currentBallance;
    } else {
        let totallPrice = 0;
        ownedStocks.forEach(stock => {
            totallPrice += (stock.share * stock.price);
        })
        return (currentBallance + totallPrice);
    }
}