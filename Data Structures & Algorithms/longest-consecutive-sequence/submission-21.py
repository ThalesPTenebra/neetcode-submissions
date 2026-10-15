class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen = set(nums)
        longest = 0

        for n in nums:
            if n - 1 in seen or n not in seen:
                continue
            
            cur = 1
            while True:
                seen.remove(n)
                if n + 1 in seen:
                    cur += 1
                    n += 1
                else:
                    break
            
            longest = max(longest, cur)
        return longest