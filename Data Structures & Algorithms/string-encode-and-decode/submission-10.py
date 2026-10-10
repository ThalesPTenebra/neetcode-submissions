class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ""
        for n in strs:
            result += str(len(n)) + "#" + n
        return result

    def decode(self, s: str) -> List[str]:
        counter = 0
        result = []
        while counter < len(s):
            length = ""
            while s[counter] != "#":
                length += s[counter]
                counter += 1
            length = int(length)
            counter += 1
            limit = counter + length
            word = ""
            while counter < limit:
                word += s[counter]
                counter += 1
            result.append(word)
        return result