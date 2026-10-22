class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
            [1,2,3,2,3,4]
            [1,2,3,4]
        """

        if len(nums) == 1:
            return 1
        
        slow, fast = 0, 1
        while fast < len(nums):
            if nums[fast - 1] != nums[fast]:
                nums[slow + 1] = nums[fast]
                slow += 1
            fast += 1
        return slow + 1