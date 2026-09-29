class Solution:
    # Horizontal solution
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = strs[0]

        for word in strs:
            i = 0
            while i < min(len(prefix), len(word)):
                if word[i] != prefix[i]:
                    break
                i += 1
            prefix = prefix[0:i]
                    
        return prefix
