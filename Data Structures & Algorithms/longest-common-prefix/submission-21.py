class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Horizontal
        # Take the first str
        # Compare word by word till we found out the longest common prefix
        """
        Input: strs = ["bat","bag","bank","band"]

        Output: "ba"

        prefix = bat
        """
        prefix = strs[0]

        for word in strs[1:]:
            prefix = prefix[:len(word)]
            for i, c in enumerate(word):
                if i >= len(prefix) or c != prefix[i]:
                    prefix = prefix[:i]
        return prefix