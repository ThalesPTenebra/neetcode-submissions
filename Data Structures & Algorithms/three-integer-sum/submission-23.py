class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        for k in range(len(nums) - 2):
            if k > 0 and nums[k] == nums[k - 1]:
                continue
            i, j = k + 1, len(nums) - 1
            while i < j:
                if i > k + 1 and nums[i] == nums[i - 1]:
                    i += 1
                    continue
                sum = nums[k] + nums[i] + nums[j]
                if sum == 0:
                    res.append([nums[k], nums[i], nums[j]])
                    i += 1
                    j -= 1
                elif sum > 0:
                    j -= 1
                else:
                    i += 1
        return res