class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        """
        val * n
        val = 1
        [1]
        O(n)
        i, j
        """
        i, j = 0, len(nums) - 1
        while i <= j:
            if nums[i] == val:
                nums[i] = nums[j]
                j -= 1
            else:
                i += 1
        print(j)
        return j + 1