class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        counter = {0: 1}
        res = 0
        
        sum = 0
        for n in nums:
            sum += n
            diff = sum - k
            res += counter.get(diff, 0)
            counter[sum] = counter.get(sum, 0) + 1
        return res