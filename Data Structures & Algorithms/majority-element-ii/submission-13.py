class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        """
        """
        count = defaultdict(int)

        for n in nums:
            if len(count) <= 2:
                count[n] += 1
            if len(count) > 2:
                temp = defaultdict(int)
                for k, v in count.items():
                    if v > 1:
                        temp[k] = v - 1
                count = temp

        print(count)
        result = []
        for k in count.keys():
            if nums.count(k) > len(nums) // 3:
                result.append(k)
        return result


