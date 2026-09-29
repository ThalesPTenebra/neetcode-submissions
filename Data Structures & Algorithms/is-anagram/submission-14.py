class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sMap = {}
        tMap = {}

        for n in range(len(s)):
            sMap[s[n]] = sMap.get(s[n], 0) + 1
        for n in range(len(t)):
            tMap[t[n]] = tMap.get(t[n], 0) + 1
        return sMap == tMap