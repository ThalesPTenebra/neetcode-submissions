class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        letters = set(s)
        res = 0

        for c in letters: # X,Y
            count = l = 0
            for r in range(len(s)):
                if s[r] == c:
                    count += 1
                
                if r - l + 1 > count + k:
                    while s[l] == c:
                        l += 1
                        count -= 1
                    l += 1
                
                res = max(res, r - l + 1)

        return res