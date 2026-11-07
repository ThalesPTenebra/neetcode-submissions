class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        """
            [2, -1, 1, 2]
            [2, 1, 2, 4] k = 2 res = 4
            4
        """

        counter = {0: 1}
        res = 0

        acc = 0
        for n in nums:
            acc += n
            diff = acc - k
            res += counter.get(diff, 0)
            counter[acc] = counter.get(acc, 0) + 1

        return res