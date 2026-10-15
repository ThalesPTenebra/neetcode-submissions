class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        counter = 1
        seen = set(nums)
        
        while True:
            if counter not in seen:
                return counter
            counter += 1
