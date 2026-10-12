class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0
        
        for i, n in enumerate(prices[:len(prices) - 1]):
            if prices[i + 1] > n:
                maxProfit += prices[i + 1] - n
        return maxProfit