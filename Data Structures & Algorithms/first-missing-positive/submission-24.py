class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums):
            if nums[i] < 1 or nums[i] > len(nums) or nums[i] == i + 1 or nums[i] == nums[nums[i] - 1]:
                i += 1
                continue

            value = nums[i] # 4
            aux = nums[value - 1] # 5
            nums[value - 1] = value # 4
            nums[i] = aux # 1,2,1,4,5,3,61


            
        for i, n in enumerate(nums):
            if n != i + 1:
                return i + 1
        return len(nums) + 1