class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        alph = [0] * 26

        for i in range(len(s)):
            alph[ord(s[i]) - ord('a')] += 1
            alph[ord(t[i]) - ord('a')] -= 1
        for i in alph:
            if i != 0:
                return False
        return True

        