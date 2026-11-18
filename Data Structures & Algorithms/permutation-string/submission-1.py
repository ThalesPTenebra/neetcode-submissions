class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        alphaS1 = [0] * 26
        for c in s1:
            alphaS1[ord(c) - ord('a')] += 1
        
        alphaS2 = [0] * 26
        l = 0
        for r in range(len(s2)):
            alphaS2[ord(s2[r]) - ord('a')] += 1

            if r - l + 1 > len(s1):
                alphaS2[ord(s2[l]) - ord('a')] -= 1
                l += 1
            
            count = 0
            for i in range(26):
                if alphaS1[i] != alphaS2[i]:
                    break
                count += 1
            if count == 26:
                return True

        return False