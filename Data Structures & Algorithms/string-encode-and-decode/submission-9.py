class Solution:

    def encode(self, strs: List[str]) -> str:
        text = ""
        for n in strs:
            text += str(len(n)) + "#" + n
        return text

    def decode(self, s: str) -> List[str]:
        ptr = 0
        result = []
        while ptr < len(s):
            size = ""
            while s[ptr] != "#":
                size += s[ptr]
                ptr += 1
            print(size)
            size = int(size)
            ptr += 1
            limit = size + ptr
            word = ""
            while ptr < limit:
                word += s[ptr]
                ptr += 1
            result.append(word)
        return result