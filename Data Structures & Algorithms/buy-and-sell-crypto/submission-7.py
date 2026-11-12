class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return 0

        maxP = 0
        L = 0

        for R in range(1, len(prices)):
            if prices[R] < prices[L]:
                L = R
                continue
            maxP = max(maxP, prices[R] - prices[L])

        return maxP