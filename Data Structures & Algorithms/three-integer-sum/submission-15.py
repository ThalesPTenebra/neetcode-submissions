class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sortedArr = sorted(nums)
        res = []
        for i in range(len(sortedArr) - 2):
            if i > 0 and sortedArr[i] == sortedArr[i - 1]:
                continue
            j = i + 1
            k = len(nums) - 1
            while j < k:
                if k < len(sortedArr) - 1 and sortedArr[k] == sortedArr[k + 1]:
                    k -= 1
                    continue
                sum = sortedArr[i] + sortedArr[j] + sortedArr[k]
                if sum == 0:
                    res.append([sortedArr[i], sortedArr[j], sortedArr[k]])
                    k -= 1
                    j += 1
                elif sum > 0:
                    k -= 1
                else:
                    j += 1
        return res
                    