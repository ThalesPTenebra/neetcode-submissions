class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:        
        freq = defaultdict(int)
        for n in nums:
            freq[n] += 1
        
        bucket = [[] for _ in range(len(nums))]
        for key, value in freq.items():
            bucket[value - 1].append(key)
        
        res = []
        count = 0
        for i in range(len(nums) - 1, -1, -1):
            for j in range(len(bucket[i])):
                res.append(bucket[i][j])
                count += 1
                if count == k:
                    return res
        return res
        
            