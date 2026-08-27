// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0], maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        if (minPrice > prices[i]) {
            minPrice = prices[i]
        }

        if (maxProfit < prices[i] - minPrice) {
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit;
};


maxProfit([7, 1, 5, 3, 6, 4])