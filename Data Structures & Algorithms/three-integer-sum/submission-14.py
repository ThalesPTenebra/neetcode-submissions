class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sortedArr = sorted(nums)
        res = []
        seen = set()
        for i in range(len(sortedArr) - 2):
            j = i + 1
            k = len(nums) - 1
            while j < k:
                sum = sortedArr[i] + sortedArr[j] + sortedArr[k]
                tup = tuple([sortedArr[i], sortedArr[j], sortedArr[k]])
                if sum == 0 and tup not in seen:
                    res.append([sortedArr[i], sortedArr[j], sortedArr[k]])
                    seen.add(tup)
                    k -= 1
                    j += 1
                elif sum > 0:
                    k -= 1
                else:
                    j += 1
        return res
                    