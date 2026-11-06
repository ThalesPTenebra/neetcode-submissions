
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        counter = defaultdict(int)
        for n in nums:
            counter[n] += 1

            if len(counter) <= 2:
                continue
            
            newCounter = defaultdict(int)
            for i, n in counter.items():
                if n > 1:
                    newCounter[i] = n - 1
            counter  = newCounter
        
        res = []
        for n in counter.keys():
            if nums.count(n) > len(nums) // 3:
                res.append(n)
        return res