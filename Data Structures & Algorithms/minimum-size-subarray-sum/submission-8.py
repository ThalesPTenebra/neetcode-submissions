class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        res = float('inf')
        total = 0
        l = 0
        for r in range(len(nums)):
            total += nums[r]
            while total - nums[l] >= target:
                total -= nums[l]
                l += 1
                if r - l + 1 < res:
                    res = r - l + 1
            if r - l + 1 < res and total >= target:
                res = r - l + 1

        if res == float('inf'):
            return 0
        else:
            return res