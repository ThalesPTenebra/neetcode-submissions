class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        A = defaultdict(int)

        for n in nums:
            A[n] += 1

            if len(A) <= 2:
                continue
            
            B = defaultdict(int)
            for k, v in A.items():
                if v > 1:
                    B[k] = v - 1
            A = B

        res = []
        for num in A:
            if nums.count(num) > len(nums) // 3:
                res.append(num)
        
        return res