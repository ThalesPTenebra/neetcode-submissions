class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        i = 0
        """
        [3, -2, 1, 0]
        i = 0
        [1, -2, 3, 0]
        i = 0
        [1, -2, 3, 0]
        i = 1
        []
        """

        while i < len(nums):
            if nums[i] <= 0 or nums[i] > len(nums):
                i += 1
                continue
            new_idx = nums[i] - 1
            if nums[new_idx] == nums[i]:
                i += 1
                continue
            aux = nums[new_idx]
            nums[new_idx] = nums[i]
            nums[i] = aux

        for i in range(len(nums)):
            if nums[i] != i + 1:
                return i + 1
        return len(nums) + 1