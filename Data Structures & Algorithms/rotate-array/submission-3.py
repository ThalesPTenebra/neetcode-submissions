class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def invert(nums: List[int], start, end) -> None:
            i, j = start, end
            while i < j:
                aux = nums[i]
                nums[i] = nums[j]
                nums[j] = aux
                i += 1
                j -= 1
        k = k % len(nums)
        invert(nums, 0, len(nums) - 1)
        invert(nums, 0, k - 1)
        invert(nums, k, len(nums) - 1)