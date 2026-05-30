class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // 2 1 3
    merge(nums, l, m, r){
        // prepare suport arrays
        const LSize = m - l + 1
        const RSize = r - m

        const LArray = nums.slice(l, m + 1)
        const RArray = nums.slice(m + 1, r + 1)

        let LPointer = 0
        let RPointer = 0

        // sort in nums
        while(LPointer < LSize && RPointer < RSize){
            if(LArray[LPointer] > RArray[RPointer]){
                nums[l] = RArray[RPointer]
                l++
                RPointer++
            } else {
                nums[l] = LArray[LPointer]
                l++
                LPointer++
            }
        }

        // handle the left elements
        while(LPointer < LSize){
            nums[l] = LArray[LPointer]
            l++
            LPointer++
        }

        while(RPointer < RSize){
            nums[l] = RArray[RPointer]
            l++
            RPointer++
        }
    }


    sortArray(nums, l = 0, r = nums.length - 1) {
        // MergeSort, nLog(N) for any case

        // Prepare for recursion
        if(l < r){
            const m = Math.floor((l + r) / 2)

            this.sortArray(nums, l, m)
            this.sortArray(nums, m + 1, r)

            this.merge(nums, l, m, r)
        }

        return nums
    }
}
