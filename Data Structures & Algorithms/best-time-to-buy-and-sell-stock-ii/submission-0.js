class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0

        // I aways want to sell in local tops
        // I aways want to buy in local vales
        // how to implement that?
        let l = 0
        let r = 0

        while(r < prices.length - 1){
            if(prices[r + 1] > prices[r]){
                max += prices[r + 1] - prices[r]
            }
            r++;
        }

        return max;
    }
}
