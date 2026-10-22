class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = defaultdict(int)
        for n in nums:
            freq[n] += 1
        
        bucket = [[] for _ in range(2001)] 
        for key, v in freq.items():
            bucket[v].append(key)
        
        result = []
        for i in range(2000, -1, -1):
            if len(result) >= k:
                return result
            
            result.extend(bucket[i])
        return result