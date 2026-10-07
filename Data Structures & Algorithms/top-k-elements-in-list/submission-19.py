class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """
        10.000 Max array size
        2001 number range

        1- Find the frequency -> O(n)
        2- Order the frequency get the top elements -> In case of max array size -> 5 -> 2001
        - Order this frequency in bucket sort O(n)
        - We have to store in the buckets all the values that share the same frequency
        3- Cut the top k (last positions of the bucket array)
        4- return it
        """
        freq = defaultdict(int)
        for n in nums:
            freq[n] += 1
        
        bucket = [[] for _ in range(2002)]
        for key, value in freq.items():
            bucket[value].append(key)
        
        result = []
        counter = 0
        for i in range(2001, 0, -1):
            for j in range(len(bucket[i])):
                if counter >= k:
                    return result
                result.append(bucket[i][j])
                counter += 1
        return result
