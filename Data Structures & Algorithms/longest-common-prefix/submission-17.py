class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        sor = sorted(strs)
        prefix = ""
        counter = 0
        first, last = sor[0], sor[-1]
        
        while counter < len(first) and counter < len(last):
            if first[counter] == last[counter]:
                prefix += first[counter]
            else:
                break
            counter += 1
        return prefix