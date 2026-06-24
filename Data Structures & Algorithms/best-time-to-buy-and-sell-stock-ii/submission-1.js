class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length
        let sum = 0
        for(let i = 0; i < n - 1; i++){
            if(prices[i + 1] > prices[i]){
                sum += prices[i + 1] - prices[i]
            }
        }

        return sum
    }
}
