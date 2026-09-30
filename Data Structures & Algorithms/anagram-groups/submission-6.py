class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for word in strs:
            wordSorted = "".join(sorted(word))
            anagrams[wordSorted].append(word)

        return list(anagrams.values())