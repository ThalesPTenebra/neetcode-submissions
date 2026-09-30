class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # set 2 pointer 
        # if left pointer finds val, switch with right pointer
        # right pointer in the end + 1 will be k

        right = len(nums) - 1
        left = 0
        
        while left < right + 1:
            if nums[left] == val:
                nums[left] = nums[right]
                right -= 1
            else:
                left += 1
            


        return right + 1