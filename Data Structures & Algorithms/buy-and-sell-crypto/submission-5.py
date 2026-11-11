class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return 0

        profit = 0

        L, R = 0, 1
        while R < len(prices):
            profit = max(profit, prices[R] - prices[L])
            if prices[L] > prices[R]:
                L = R
                R = L + 1
            else:
                R += 1

        return profit
        
