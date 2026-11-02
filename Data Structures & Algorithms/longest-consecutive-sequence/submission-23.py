class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen = set(nums)
        longest = 0

        for n in nums:
            if n - 1 in seen:
                continue
            
            candidate = n
            counter = 0
            while candidate in seen:
                counter += 1
                candidate += 1
            longest = max(longest, counter)
        
        return longest