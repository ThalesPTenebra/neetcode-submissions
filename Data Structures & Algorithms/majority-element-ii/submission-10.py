class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        freqs = defaultdict(int)

        for n in nums:
            freqs[n] += 1
        
        result = []
        for k, v in freqs.items():
            if v > len(nums) // 3:
                result.append(k)
        
        return result