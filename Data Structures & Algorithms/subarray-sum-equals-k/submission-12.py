class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        counter = {0: 1}
        res = 0
        
        sum = 0
        for i, n in enumerate(nums):
            sum += n
            diff = sum - k
            add = counter.get(diff, 0)

            res += add
            counter[sum] = counter.get(sum, 0) + 1
        return res
        