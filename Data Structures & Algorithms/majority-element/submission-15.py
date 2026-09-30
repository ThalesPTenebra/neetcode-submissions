class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Sorting
        A = sorted(nums)

        return A[len(nums) // 2]