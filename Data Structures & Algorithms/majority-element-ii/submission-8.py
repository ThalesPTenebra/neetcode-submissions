class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        freq = defaultdict(int)
        for n in nums:
            freq[n] += 1
        
        result = []
        for i, n in freq.items():
            if n > len(nums) // 3:
                result.append(i)
        return result