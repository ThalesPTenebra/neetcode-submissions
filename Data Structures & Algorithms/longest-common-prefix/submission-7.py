class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = strs[0]

        for word in strs:
            counter = 0
            for i  in range(len(prefix)):
                if i > len(word) - 1:
                    prefix = prefix[0:counter]
                    break
                if prefix[i] == word[i]:
                    counter += 1
                else:
                    prefix = prefix[0:counter]
                    break
        return prefix
            
