class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Transform the group in a key
        # Sorted (nLogN)
        # Tuple -> The alphabet array with the number of char ocurrencies

        group = defaultdict(list)

        for word in strs:
            A = [0] * 26
            for c in word:
                A[ord(c) - ord('a')] += 1
            group[tuple(A)].append(word)
        return list(group.values())
