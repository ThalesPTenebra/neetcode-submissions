class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}

        for word in strs:
            sortedString = "".join(sorted(word))
            if sortedString in groups:
                groups[sortedString].append(word)
            else:
                groups[sortedString] = [word]
        
        result = []
        for key in groups:
            result.append(groups[key])

        return result