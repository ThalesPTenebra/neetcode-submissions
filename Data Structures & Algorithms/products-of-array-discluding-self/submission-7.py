class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        [1,2,4,6]
        [1,1,2,8]
        [48,24,12,8]
        """
        prefix = [1]

        for i in range(len(nums) - 1):
            prefix.append(prefix[i] * nums[i])
        
        acc = 1
        result = [1] * len(nums)
        for i in range(len(nums) - 1, -1, -1):
            result[i] = prefix[i] * acc
            acc = acc * nums[i]
        return result
            