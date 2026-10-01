class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Verificar letra a letra em cada palavra, na primeira diferente, corta
        prefix = ""
        i = 0

        # 2 loops, um infinito para as letras, nao sei quantas tem
        # um para todas as strs
        while True:
            #criar um candidato, que é o char que estmaos comparando no momento, e deve ser igual em todas as palavras, se for, adiciona ao prefix
            # se nao, acabou ai
            if i == len(strs[0]):
                break
            candidate = strs[0][i]

            for word in strs:
                if len(word) == i or word[i] != candidate:
                    return prefix

            prefix += candidate
            i += 1
        return prefix