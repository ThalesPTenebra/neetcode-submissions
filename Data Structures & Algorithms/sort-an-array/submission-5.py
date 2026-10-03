class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        # Merge sort nLogN
        # Stable
        # [5,10,1,3]

        # [1, 5, 2, 4] ->
        # [1, 2, 4, 5]
        def merge(nums, l, m, r):
            left, right = nums[l:m + 1], nums[m + 1:r + 1]
            i, j, k = 0, 0, l

            while i < len(left) and j < len(right):
                if left[i] <= right[j]:
                    nums[k] = left[i]
                    i += 1
                else:
                    nums[k] = right[j]
                    j += 1
                k += 1

            while i < len(left):
                nums[k] = left[i]
                i += 1
                k += 1
            
            while j < len(right):
                nums[k] = right[j]
                j += 1
                k += 1
    

        def mergeSort(nums, l, r):
            if l == r:
                return
            
            m = (l + r) // 2
            mergeSort(nums, l, m)
            mergeSort(nums, m + 1, r)

            merge(nums, l, m, r)
        
        mergeSort(nums, 0, len(nums) - 1)
        return nums