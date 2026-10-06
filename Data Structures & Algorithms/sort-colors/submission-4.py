class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        [1,0,1,2]
        [0,1,1,2]

        sort + low domain = bucket sort -> O(n)
        """

        bucket = [0, 0, 0]
        for n in nums:
            bucket[n] += 1
        
        counter = 0
        for i in range(3):
            for j in range(bucket[i]):
                nums[counter] = i
                counter += 1

        