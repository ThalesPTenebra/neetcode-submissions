class Solution:
    def isPalindrome(self, s: str) -> bool:
        def isValid(c: str) -> bool:
            return ord('A') <= ord(c) <= ord('Z') or ord('a') <= ord(c) <= ord('z') or ord('0') <= ord(c) <= ord('9')

        i, j = 0, len(s) - 1

        while i < j:
            if isValid(s[i]) == False:
                i += 1
                continue

            if isValid(s[j]) == False:
                j -= 1
                continue

            if s[i].lower() != s[j].lower():
                return False
            i += 1
            j -= 1
        
        return True