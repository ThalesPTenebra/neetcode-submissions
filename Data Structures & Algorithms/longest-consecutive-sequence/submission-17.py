class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        
        seen = set(nums) # O(n)
        longest = 1

        for n in nums:
            aux = n
            candidate = 1
            while True:
                aux -= 1
                if aux in seen:
                    candidate += 1
                    seen.remove(aux)
                else:
                    aux = n
                    break
            while True:
                aux += 1
                if aux in seen:
                    candidate += 1
                    seen.remove(aux)
                else:
                    break
            if candidate > longest:
                longest = candidate
        return longest

