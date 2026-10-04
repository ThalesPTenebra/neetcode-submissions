class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        [1,0,1,2] -> 
        [0,1,1,2]
        """
        
        bucket = [0, 0, 0]

        for num in nums:
            bucket[num] += 1

        counter = 0
        for i in range(3):
            for _ in range(bucket[i]):
                nums[counter] = i
                counter += 1