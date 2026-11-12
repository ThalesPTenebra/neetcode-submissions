class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 2:
            return len(s)

        longest = 0
        window = {}
        
        L = 0
        for R in range(len(s)):
            if s[R] in window:
                L = max(window[s[R]] + 1, L)
            window[s[R]] = R
            longest = max(longest, R - L + 1)


        return longest