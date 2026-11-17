class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        window = set()
        longest = 0

        l = 0
        for r in range(len(s)):
            if s[r] in window:
                while s[l] != s[r]:
                    window.remove(s[l])
                    l += 1
                l += 1
            else:
                window.add(s[r])
            


            longest = max(longest, r - l + 1)
        return longest