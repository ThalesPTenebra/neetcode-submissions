class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for word in strs:
            alph = [0] * 26
            for c in word:
                alph[ord(c) - ord('a')] += 1
            anagrams[tuple(alph)].append(word)
        return list(anagrams.values())
