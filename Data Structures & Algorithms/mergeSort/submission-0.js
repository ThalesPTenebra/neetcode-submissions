/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    merge(arr, l, m, r){
        // Find size of the 2 subarrays to be merged
        const lSize = m - l + 1;
        const rSize = r - m;

        // Create temp subarrays
        const L = new Array(lSize)
        const R = new Array(rSize)

        // Copy the sorted left & right to temp arrays
        for(let i = 0; i < lSize; i++){
            L[i] = arr[l + i];
        }

        for(let i = 0; i < rSize; i++){
            R[i] = arr[m + 1 + i]
        }

        let i = 0;
        let j = 0;
        let k = l;

        while(i < L.length && j < R.length){
            if(L[i].key <= R[j].key){
                arr[k] = L[i];
                i++
            } else {
                arr[k] = R[j]
                j++
            }
            k++;
        }

        // One of the half will have elements remaining
        while(i < L.length){
            arr[k] = L[i]
            i++
            k++
        }

        while(j < R.length){
            arr[k] = R[j]
            j++;
            k++;
        }
    }


    mergeSort(pairs, l = 0, r = pairs.length - 1) {
        if(l < r){
            let m = Math.floor((l + r) / 2)

            this.mergeSort(pairs, l, m);
            this.mergeSort(pairs, m + 1, r)

            this.merge(pairs, l, m, r);
        }
        
        return pairs
    }
}
