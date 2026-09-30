import random
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Randon
        while(True):
            candidate = random.choice(nums)
            if nums.count(candidate) > len(nums) // 2:
                return candidate