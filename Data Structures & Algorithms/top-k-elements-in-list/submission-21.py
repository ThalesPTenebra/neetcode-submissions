class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = defaultdict(int)

        for n in nums:
            freq[n] += 1
        
        bucket = [[] for _ in range(2001)]
        for key, v in freq.items():
            bucket[v].append(key)
        
        result = []
        for i in range(2000, 0, -1):
            for j in range(len(bucket[i])):
                if len(result) == k:
                    return result
                result.append(bucket[i][j])
        return result
         