class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        def isPalindrome(s: str) -> bool:
            l, r = 0, len(s) - 1
            while l < r:
                if s[l] == s[r]:
                    l += 1
                    r -= 1
                else:
                    return False
            return True

        while l < r:
            if s[l] != s[r]:
                return isPalindrome(s[l + 1:r + 1]) or isPalindrome(s[l:r])
            else:
                l += 1
                r -= 1
        return True
                