class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums) - 1

        A = []
        for i, num in enumerate(nums):
            A.append([num, i])

        A.sort()

        while left < right:
            sum = A[left][0] + A[right][0]
            if sum > target:
                right -= 1
            elif sum < target:
                left += 1
            else:
                return [min(A[left][1], A[right][1]), max(A[left][1], A[right][1])]
            
            