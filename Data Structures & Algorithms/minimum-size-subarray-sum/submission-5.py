class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min = float('inf')
        
        l, sum = 0, 0
        for r in range(len(nums)):
            sum += nums[r]

            while sum >= target and r >= l:
                sum -= nums[l]
                l += 1
            
                if sum < target:
                    if min > r - l + 2:
                        min = r - l + 2
                else:
                    if min > r - l + 1:
                        min = r - l + 1
                    

        if min == float('inf'):
            return 0
        return min