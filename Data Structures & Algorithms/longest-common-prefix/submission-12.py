class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        A = sorted(strs)

        first = A[0]
        last = A[-1]

        counter = 0
        for i in range(len(first)):
            if first[i] == last[i]:
                counter += 1
            else:
                break
        return first[0:counter]