class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        # [2,-1,1,2]
        # [2,1,2,4] k = 2
        counting = {0: 1}
        res = 0
        sum = 0
        for n in nums:
            sum += n
            target = sum - k
            res += counting.get(target, 0)
            counting[sum] = counting.get(sum, 0) + 1
        return res


