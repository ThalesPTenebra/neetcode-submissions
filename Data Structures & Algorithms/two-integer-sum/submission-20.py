class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        A = []

        for i, num in enumerate(nums):
            A.append([num, i])
        
        A.sort()
        i = 0
        j = len(nums) - 1

        while i < j:
            if A[i][0] + A[j][0] == target:
                return [min(A[i][1], A[j][1]),
                max(A[i][1], A[j][1])]
            if A[i][0] + A[j][0] > target:
                j -= 1
                pass
            if A[i][0] + A[j][0] < target:
                i += 1
                pass