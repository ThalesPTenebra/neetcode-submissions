class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen = set(nums)
        longest = 0

        for n in nums:
            if n - 1 in seen:
                continue
            counter = 1
            while True:
                if counter + n in seen:
                    seen.remove(counter + n)
                    counter += 1
                else:
                    break
            longest = max(longest, counter)
        return longest