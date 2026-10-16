class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        for i, n in enumerate(nums):
            if n < 0:
                nums[i] = 0
        
        for i, n in enumerate(nums):
            if abs(n) > len(nums) or n == 0:
                continue
            
            idx = abs(n) - 1
            if nums[idx] == 0:
                nums[idx] = len(nums) + 1
            nums[idx] = -abs(nums[idx])
        
        for i, n in enumerate(nums):
            if n >= 0:
                return i + 1
        return len(nums) + 1