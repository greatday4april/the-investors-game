export const stockSelector = ownedStocks => {
    let totalShare = 0
    if (ownedStocks.length === 0) {
        return totalShare;
    } else {
        ownedStocks.forEach(stock => {
            totalShare += stock.share
        })
        return totalShare;
    }
}