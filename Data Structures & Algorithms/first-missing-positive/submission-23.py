class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums):
            n = nums[i]
            if n < 1 or n > len(nums):
                i += 1
                continue
            
            if n != i + 1 and nums[n - 1] != n:
                aux = nums[n - 1]
                nums[n - 1] = n
                nums[i] = aux
            else:
                i += 1
        
        counter = 0
        for i, n in enumerate(nums):
            if n != i + 1:
                return i + 1
        return len(nums) + 1