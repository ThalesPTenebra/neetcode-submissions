class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        if len(nums) < 4:
            return []
        
        res = []
        nums.sort()
        for i in range(len(nums) - 3):
            if i > 0 and nums[i] == nums[i - 1]:
                i += 1
                continue
            for j in range(i + 1, len(nums) - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    j += 1
                    continue
                k, l = j + 1, len(nums) - 1
                while k < l:
                    if k > j + 1 and nums[k] == nums[k - 1]:
                        k += 1
                        continue
                    sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if sum == target:
                        res.append([nums[i], nums[j], nums[k], nums[l]])
                        k += 1
                        l -= 1
                    elif sum > target:
                        l -= 1
                    else:
                        k += 1

        return res