class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        freqS = {}
        for word in range(len(s)):
            freqS[s[word]] = freqS.get(s[word], 0) + 1
        
        freqT = {}
        for word in range(len(t)):
            freqT[t[word]] = freqT.get(t[word], 0) + 1   
        
        return freqT == freqS

        