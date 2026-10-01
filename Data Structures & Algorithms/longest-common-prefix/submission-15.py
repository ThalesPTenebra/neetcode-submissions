class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Horizontal
        # Elect one word as prefix
        #  We gonna compare to each word to get prefix cutting in tail

        prefix = strs[0]
        for word in strs:
            if word == prefix:
                continue
            for i, s in enumerate(prefix):
                if i == len(word) or prefix[i] != word[i]:
                    prefix = prefix[0:i]
                    break
        return prefix
                