class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexes = {}

        for i, num in enumerate(nums):
            indexes[num] = i

        for i, num in enumerate(nums):
            diff = target - num
            if diff in indexes and indexes[diff] != i:
                return [i, indexes[diff]]
            