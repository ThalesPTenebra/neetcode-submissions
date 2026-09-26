class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexes = {}

        for i, num in enumerate(nums):
            diff = target - num
            if diff in indexes:
                return [indexes[diff], i]
            indexes[num] = i
        return []