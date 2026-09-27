class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        elected = nums[0]
        counter = 1

        for i in range(1, len(nums)):
            if nums[i] == elected:
                counter += 1
                pass
            else:
                counter -= 1
                if counter == 0:
                    elected = nums[i]
                    counter = 1
        return elected