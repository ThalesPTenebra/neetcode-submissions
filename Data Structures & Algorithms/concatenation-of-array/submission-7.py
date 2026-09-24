class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        # nums [1, 2, 3]
        # nums_duplicated = [1, 2, 3, 1, 2, 3]
        ans = []
        for i in range(2):
            for num in range(len(nums)):
                ans.append(nums[num])
        return ans