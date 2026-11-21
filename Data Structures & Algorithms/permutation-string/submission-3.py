class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2) < len(s1):
            return False

        bucketS1 = [0] * 26
        bucketS2 = [0] * 26

        for c in s1:
            bucketS1[ord(c) - ord('a')] += 1
        
        l = 0
        for r in range(len(s2)):
            bucketS2[ord(s2[r]) - ord('a')] += 1

            if r - l + 1 < len(s1):
                continue
            
            if r - l + 1 > len(s1):
                bucketS2[ord(s2[l]) - ord('a')] -= 1
                l += 1
            
            if bucketS1 == bucketS2:
                return True

        return False
            

