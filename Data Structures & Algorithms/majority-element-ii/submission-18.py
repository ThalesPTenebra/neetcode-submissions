class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        top = defaultdict(int)
        for n in nums:
            top[n] += 1
            if len(top) <= 2:
                continue
            
            temp = defaultdict(int)
            for k, v in top.items():
                if v > 1:
                    temp[k] = v - 1
            top = temp
                
        
        result = []
        for k in top.keys():
            if nums.count(k) > len(nums) // 3:
                result.append(k)
        return result
