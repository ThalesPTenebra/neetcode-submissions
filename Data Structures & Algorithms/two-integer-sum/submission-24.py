class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}

        for i, num in enumerate(nums):
            diff = target - num
            if diff in seen:
                return [min(seen[diff], i), max(seen[diff], i)]
            else:
                seen[num] = i
        