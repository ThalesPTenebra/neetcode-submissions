class Solution:
    def validPalindrome(self, s: str) -> bool:
        def isPalin(start, end):
            l, r = start, end - 1
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True
        
        l, r = 0, len(s) - 1
        while l < r:
            if s[l] != s[r]:
                return isPalin(l + 1, r + 1) or isPalin(l, r)
            l += 1
            r -= 1
        return True
