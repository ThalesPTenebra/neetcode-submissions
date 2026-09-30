class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Brute force solution
        freqDict = {}
        for n in nums:
            freqDict[n] = freqDict.get(n, 0) + 1
        
        for key, value in freqDict.items():
            if value > len(nums) // 2:
                return key