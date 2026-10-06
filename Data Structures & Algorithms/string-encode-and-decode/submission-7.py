class Solution:

    def encode(self, strs: List[str]) -> str:
        # 113#mdcdfmosdmfo1231#dfsdfkkk
        result = ""
        for word in strs:
            result += str(len(word)) + "#" + word
        return result
            

    def decode(self, s: str) -> List[str]:
        print(s)
        result = []

        counter = 0
        while counter < len(s):
            value = ""
            while s[counter] != '#':
                value += s[counter]
                counter += 1
            value = int(value)
            counter += 1
            limit = counter + value
            word = ""
            while counter < limit:
                word += s[counter]
                counter += 1
            result.append(word)
        return result