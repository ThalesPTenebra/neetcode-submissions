class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max = 0
        for i in range(len(prices) - 1):
            if prices[i + 1] > prices[i]:
                max += prices[i + 1] - prices[i]
        return max