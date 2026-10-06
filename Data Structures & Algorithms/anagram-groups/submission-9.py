class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        ["act","pots","tops","cat","stop","hat"]
        [["hat"],["act", "cat"],["stop", "pots", "tops"]]
        m*nLogN sorting the strings

        """
        anagrams = defaultdict(list)

        for word in strs:
            tup = [0] * 26
            for c in word:
                tup[ord(c) - ord('a')] += 1
            anagrams[tuple(tup)].append(word)

        return list(anagrams.values())
