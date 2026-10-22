class Solution:
    def validPalindrome(self, s: str) -> bool:
        def isPalin(s: str) -> bool:
            i, j = 0, len(s) - 1
            while i < j:
                if s[i] != s[j]:
                    return False
                i += 1
                j -= 1
            return True
        
        i, j = 0, len(s) - 1
        while i < j:
            if s[i] != s[j]:
                return isPalin(s[i + 1:j + 1]) or isPalin(s[i:j])
            i += 1
            j -= 1
        return True