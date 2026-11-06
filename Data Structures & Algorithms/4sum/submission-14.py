class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        # [1, 1, 1, 1, 1, 2, 2, 2]
        if len(nums) < 4:
            return []
        
        nums.sort()
        a = 0
        res = []

        while a < len(nums) - 3:
            if a > 0 and nums[a] == nums[a - 1]:
                a += 1
                continue
            b = a + 1
            while b < len(nums) - 2:
                if b > a + 1 and nums[b] == nums[b - 1]:
                    b += 1
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
                
                b += 1
            a += 1

        return res