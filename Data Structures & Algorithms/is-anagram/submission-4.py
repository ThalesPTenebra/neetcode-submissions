class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # sort and compare
        # compare map de frequencia
        sMap = {}
        tMap = {}

        for word in s:
            sMap[word] = sMap.get(word, 0) + 1
        for word in t:
            tMap[word] = tMap.get(word, 0) + 1

        return sMap == tMap