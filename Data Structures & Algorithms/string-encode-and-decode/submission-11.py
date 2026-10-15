class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""
        for n in strs:
            res += str(len(n)) + "#" + n
        return res

    def decode(self, s: str) -> List[str]:
        counter = 0
        res = []
        while counter < len(s):
            size = ""
            while s[counter] != "#":
                size += s[counter]
                counter += 1
            
            size = int(size)
            counter += 1

            stop = counter + size
            word = ""
            while counter < stop:
                word += s[counter]
                counter += 1
            res.append(word)
        return res