class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # [1,1,2,8]
        # [,1]
        prefix = [1]
        for i in range(len(nums) - 1):
            prefix.append(nums[i] * prefix[i])

        res = [0] * len(nums) 
        sufix = 1
        for i in range(len(nums) - 1, -1, -1):
            res[i] = sufix * prefix[i]
            sufix *= nums[i]

        return res