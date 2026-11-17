class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        
        freqS1 = defaultdict(int)
        for c in s1:
            freqS1[c] += 1

        freqS2 = defaultdict(int)
        l = 0
        for r in range(len(s2)):
            freqS2[s2[r]] += 1

            if r - l + 1 > len(s1):
                freqS2[s2[l]] -= 1
                if freqS2[s2[l]] == 0:
                    del freqS2[s2[l]]
                l += 1
            
            print(freqS1, freqS2)
            if freqS2 == freqS1:
                return True

        return False