class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        
        slow, fast = 0, 1
        while fast < len(nums):
            if nums[fast] != nums[fast - 1]:
                nums[slow + 1] = nums[fast]
                slow += 1
            fast += 1
        return slow + 1