class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        alph = [0] * 26
        for c in s:
            alph[ord(c) - ord("a")] += 1
        for c in t:
            alph[ord(c) - ord('a')] -= 1
        
        for i in range(len(alph)):
            if alph[i] != 0:
                return False
        return True