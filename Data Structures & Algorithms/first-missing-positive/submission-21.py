class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums):
            n = nums[i]
            if n <= 0 or n > len(nums):
                i += 1
                continue
            
            if n == nums[n - 1] or n - 1 == i:
                i += 1
                continue
            
            nums[i], nums[n - 1] = nums[n - 1], nums[i]
        
        for i in range(len(nums)):
            if nums[i] - 1 != i:
                return i + 1
        return len(nums) + 1