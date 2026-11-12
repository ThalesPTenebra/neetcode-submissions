class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        res = []

        for a in range(len(nums) - 3):
            if a > 0 and nums[a] == nums[a - 1]:
                continue
            for b in range(a + 1, len(nums) - 2):
                if b > a + 1 and nums[b] == nums[b - 1]:
                    continue
                c, d = b + 1, len(nums) - 1
                while c < d:
                    if c > b + 1 and nums[c] == nums[c - 1]:
                        c += 1
                        continue
                    sum = nums[a] + nums[b] + nums[c] + nums[d]
                    if sum == target:
                        res.append([nums[a], nums[b], nums[c], nums[d]])
                        c += 1
                        d -= 1
                    elif sum > target:
                        d -= 1
                    else:
                        c += 1

        return res