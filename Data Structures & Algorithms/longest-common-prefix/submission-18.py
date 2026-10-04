class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        """"
        Input: strs = ["bat","bag","bank","band"]
        Output: "ba"
        """
        # vertical
        prefix = ""
        counter = 0

        while counter < len(strs[0]):
            candidate = strs[0][counter]
            for word in strs:
                if counter >= len(word) or word[counter] != candidate:
                    return prefix
            prefix += candidate
            counter += 1
        return prefix