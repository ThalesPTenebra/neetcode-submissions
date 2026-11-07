class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def inv(start, end):
            while start < end:
                aux = nums[start]
                nums[start] = nums[end]
                nums[end] = aux
                start += 1
                end -= 1

        k = k % len(nums)   
        inv(0, len(nums) - 1)
        inv(0, k - 1)
        inv(k, len(nums) - 1)
