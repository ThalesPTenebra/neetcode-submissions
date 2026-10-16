class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        for i, n in enumerate(nums):
            if n < 0:
                nums[i] = 0

        for i, n in enumerate(nums):
            idx = abs(n) - 1
            if idx >= len(nums) or n == 0:
                continue
            
            nums[idx] = -abs(nums[idx])
            if nums[idx] == 0:
                nums[idx] = -1 * len(nums)
        
        print(nums)
        for i, n in enumerate(nums):
            if n >= 0:
                return i + 1
        return len(nums) + 1