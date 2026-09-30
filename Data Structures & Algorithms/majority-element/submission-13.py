class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Brute force solution
        for n in nums:
            count = sum(1 for i in nums if i == n)
            if count > len(nums) // 2:
                return n