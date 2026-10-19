class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen = set(nums)

        longest = 0
        for n in nums:
            if n - 1 in seen or n not in seen:
                continue
            
            counter = 1
            cur = n
            while True:
                seen.remove(cur)
                if cur + 1 in seen:
                    cur += 1
                    counter += 1
                else:
                    break
            longest = max(counter, longest)
        return longest