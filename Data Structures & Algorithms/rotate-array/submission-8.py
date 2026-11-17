class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def invert(l, r):
            while l < r:
                aux = nums[l]
                nums[l] = nums[r]
                nums[r] = aux
                l += 1
                r -= 1

        k = k % len(nums)
        invert(0, len(nums) - 1)
        invert(0, k - 1)
        invert(k, len(nums) - 1)