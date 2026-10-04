class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        elected = nums[0]
        counter = 0

        for n in nums:
            if n == elected:
                counter += 1
            else:
                counter -= 1

                if counter == 0:
                    elected = n
                    counter = 1
        return elected
