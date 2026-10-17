class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
            prefix -> olha, aqui é a multiplicação de todos até aqui
            sulfix -> Aqui é a multiplicação de todos depois daqui
            prefix = [1,1,2,8]
        """

        prefix = [1]
        for i, n in enumerate(nums):
            prefix.append(prefix[i] * nums[i])
        
        result = [1] * len(nums)
        sufix = 1
        for i in range(len(nums) - 1, -1, -1):
            result[i] = prefix[i] * sufix
            sufix *= nums[i]
        
        return result