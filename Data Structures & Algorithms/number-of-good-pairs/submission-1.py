class Solution:
    # [1,1,1,1]
    # 3 + 2 + 1
    def numIdenticalPairs(self, nums: List[int]) -> int:
        def sum(n):
            if n == 1:
                return 1
            return n + sum(n - 1)
        
        freq = defaultdict(int)
        for n in nums:
            freq[n] += 1

        counter = 0
        for v in freq.values():
            if v > 1:
                counter += sum(v - 1)
        return counter