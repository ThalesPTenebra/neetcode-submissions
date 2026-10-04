class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in map:
                return [min(map[diff], i), max(map[diff], i)] 
            map[n] = i