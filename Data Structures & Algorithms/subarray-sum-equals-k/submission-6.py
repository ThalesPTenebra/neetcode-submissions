class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = {0: 1}
        prefix = [0]
        n = 0
        for i in range(len(nums)):
            prefix.append(prefix[i] + nums[i])
            count[prefix[i + 1]] = count.get(prefix[i + 1], 0) + 1

        for i in range(len(prefix) - 1, -1, -1):
            count[prefix[i]] -= 1
            diff = prefix[i] - k
            n += count.get(diff, 0)
        return n