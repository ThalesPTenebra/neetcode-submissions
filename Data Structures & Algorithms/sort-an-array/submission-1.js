class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(nums, l, m, r){
        // create arrays for support
        const LSize = m - l + 1
        const RSize = r - m

        const L = new Array(LSize)
        const R = new Array(RSize)

        for(let i = 0; i < LSize; i++){
            L[i] = nums[l + i]
        }
        for(let i = 0; i < RSize; i++){
            R[i] = nums[m + i + 1]
        }
        
        // compare and move
        let LPointer = 0
        let RPointer = 0
        while(LPointer < LSize && RPointer < RSize){
            if(R[RPointer] > L[LPointer]){
                nums[l] = L[LPointer]
                LPointer++
                l++
            } else {
                nums[l] = R[RPointer]
                RPointer++
                l++
            }
        }

        // move those who left
        while(LPointer < LSize){
            nums[l] = L[LPointer]
            LPointer++
            l++
        }

        while(RPointer < RSize){
            nums[l] = R[RPointer]
            RPointer++
            l++
        }
    }


    sortArray(nums, l = 0, r = nums.length - 1) {
        // This will be recursive, so the stop condition is l < r
        if(l < r){
            const m = Math.floor((r + l) / 2);

            this.sortArray(nums, l, m)
            this.sortArray(nums, m + 1, r)

            this.merge(nums, l, m , r)
        }

        return nums
    }   
}
