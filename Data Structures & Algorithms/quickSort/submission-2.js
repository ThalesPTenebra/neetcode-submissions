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
    quickSort(pairs, l = 0, r = pairs.length - 1) {
        if(r - l + 1 <= 1) return pairs

        // Select pivo
        let pivot = pairs[r];
        let left = l;

        // Particao
        for(let i = l; i < r; i++){
            if(pairs[i].key < pivot.key){
                let temp = pairs[left];
                pairs[left] = pairs[i];
                pairs[i] = temp;
                left++;
            }
        }

        // Swtich pivot with left
        pairs[r] = pairs[left]
        pairs[left] = pivot

        this.quickSort(pairs, l, left - 1);
        this.quickSort(pairs, left + 1, r)

        return pairs

    }

}
