class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(arr, l, m, r){
        const lSize = m - l + 1 // 1
        const rSize = r - m // 1

        const L = new Array(lSize) // 1
        const R = new Array(rSize) // 1

        for(let i = 0; i < lSize; i++){
            L[i] = arr[l + i];
        }

        for(let i = 0; i < rSize; i++){
            R[i] = arr[m + i + 1]
        }

        let i = 0;
        let j = 0;
        let k = l;

        while(i < lSize && j < rSize){
            if(L[i] <= R[j]){
                arr[k] = L[i]
                i++
            } else {
                arr[k] = R[j]
                j++
            }
            k++
        }

        while(i < lSize){
            arr[k] = L[i]
            i++
            k++
        }

        while(j < rSize){
            arr[k] = R[j]
            j++
            k++
        }
    }


    sortArray(nums, l = 0, r = nums.length - 1) {
        if(l < r){
            let m = Math.floor((l + r) / 2)

            this.sortArray(nums, l, m) // 10
            this.sortArray(nums, m + 1, r); // 9

            this.merge(nums, l, m, r) // 0 0 1
        }
        return nums
    }
}
