class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        A = sorted(nums)
        for i in range(1, len(A)):
            if A[i - 1] == A[i]:
                return True
        return False
