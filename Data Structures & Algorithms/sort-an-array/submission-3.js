class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    merge(nums, l, m, r){
        const LSize = m - l + 1
        const RSize = r - m

        const L = nums.slice(l, m + 1)
        const R = nums.slice(m + 1, r + 1)

        let lPtr = 0
        let rPtr = 0
        while(lPtr < LSize && rPtr < RSize){
            if(L[lPtr] > R[rPtr]){
                nums[l] = R[rPtr]
                rPtr++
            } else {
                nums[l] = L[lPtr]
                lPtr++
            }                
            l++
        }

        while(lPtr < LSize){
            nums[l] = L[lPtr]
            l++
            lPtr++
        }

        while(rPtr < RSize){
            nums[l] = R[rPtr]
            l++
            rPtr++
        }
    }

    sortArray(nums, l = 0, r = nums.length - 1) {
        // Gonna use Merge Sort nLogN
        // call recursive
        if(l < r){
            const m = Math.floor((r + l) / 2)

            this.sortArray(nums, l, m)
            this.sortArray(nums, m + 1, r)

            this.merge(nums, l, m, r)
        }

        return nums
    }
}
