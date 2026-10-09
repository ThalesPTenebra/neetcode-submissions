class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # O(n)
        """
        [1,2,4,6]
        [1, 1, 2, 8]
        [48, 24, 6, 1]
        [48, 24, 12,8]

        [-1,0,1,2,3]
        [0,-6,0,0,0]
        """
        prefix = [1]
        sufix = [1] * len(nums)
        result = []

        # Prefix
        for i in range(len(nums) - 1):
            prefix.append(nums[i] * prefix[i])
        for i in range(len(nums) - 2, -1, -1):
            sufix[i] = sufix[i + 1] * nums[i + 1]
        
        for i in range(len(nums)):
            result.append(prefix[i] * sufix[i])

        return result