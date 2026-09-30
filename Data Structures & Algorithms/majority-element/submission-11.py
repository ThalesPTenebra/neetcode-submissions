class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Brute force solution
        freqDict = {}
        for n in nums:
            freqDict[n] = freqDict.get(n, 0) + 1
        
        return max(freqDict, key=freqDict.get)