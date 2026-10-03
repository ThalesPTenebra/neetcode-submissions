class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # 2 pointer sulution ->

        # if right = val, switch with right, right decrease and left stay
        # if not, left move

        left, right = 0, len(nums) - 1

        while left <= right:
            if nums[left] == val:
                nums[left] = nums[right]
                right -= 1
            else:
                left += 1
        return right + 1