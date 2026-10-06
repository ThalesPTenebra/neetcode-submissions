class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # O(n)
        freq = defaultdict(int)

        for n in nums:
            freq[n] += 1

        # 5 -> 2000
        # 2001 -> 5

        bucket = [[] for _ in range(2001)]
        for n, f in freq.items():
            bucket[f].append(n)
        result = []
        counter = 0
        for i in range(2000, 0, -1):
            for j in range(len(bucket[i])):
                if counter == k:
                    return result
                result.append(bucket[i][j])
                counter += 1
        return result
