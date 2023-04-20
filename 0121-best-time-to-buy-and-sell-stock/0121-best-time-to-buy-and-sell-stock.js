/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;
    let minPrice = prices[0];
  
     for(let i = 0; i<prices.length; i++){
      
      minPrice = Math.min(minPrice, prices[i]);
      let current  = prices[i] - minPrice;
      maxProfit = Math.max(current, maxProfit);
      
     }
   return maxProfit
};