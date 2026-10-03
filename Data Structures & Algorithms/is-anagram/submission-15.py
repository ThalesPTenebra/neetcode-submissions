class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        alph = [0] * 26
        for c in s:
            alph[ord(c) - ord('a')] += 1
        for c in t:
            alph[ord(c) - ord('a')] -= 1
        
        for c in alph:
            if c != 0:
                return False
        return True