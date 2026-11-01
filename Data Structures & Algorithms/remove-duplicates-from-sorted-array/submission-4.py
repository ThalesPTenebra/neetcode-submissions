class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 1
        
        slow, fast = 0, 1
        for i in range(len(nums) - 1):
            if nums[fast] != nums[slow]:
                nums[slow + 1] = nums[fast]
                fast += 1
                slow += 1
            else:
                fast += 1
        
        return slow + 1