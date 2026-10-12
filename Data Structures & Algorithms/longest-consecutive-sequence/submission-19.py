class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        """
        [4,2,20,4,10,3,5]
        """
        seen = set(nums)
        longest = 0

        for n in nums:
            cur = n
            counter = 1
            if cur not in seen:
                continue
            while True:
                if cur - 1 in seen:
                    cur -= 1
                    counter += 1
                else:
                    break
            cur = n
            while True:
                if cur + 1 in seen:
                    cur += 1
                    seen.remove(cur)
                    counter += 1
                else:
                    break

            longest = max(counter, longest)


        return longest
