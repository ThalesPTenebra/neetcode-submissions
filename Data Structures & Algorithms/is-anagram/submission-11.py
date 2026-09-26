class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        alph = [0] * 26

        for i in range(len(s)):
            alph[ord(s[i]) - ord('a')] += 1
        
        for i in range(len(t)):
            alph[ord(t[i]) - ord('a')] -= 1
        
        for letter in alph:
            if letter != 0:
                return False
        return True
        