class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longest = ""

        counter = 0
        while counter < len(strs[0]):
            candidate = strs[0][counter]
            for word in strs:
                if counter >= len(word) or word[counter] != candidate:
                    return longest
            longest += candidate
            counter += 1
        return longest