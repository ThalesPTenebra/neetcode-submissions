class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        """
            [2,-1,1,2] k = 2
            {
                0: 1
                2: 2
                1: 1
                4: 1
            }
            [0,2,1,2,4]
        """

        res = sum = 0
        count = defaultdict(int)
        for n in nums:
            count[sum] += 1 # {0: 1, 2: 2, 1: 1}
            sum += n # sum = 2

            diff = sum - k # 0
            res += count[diff] # soma 2
        return res