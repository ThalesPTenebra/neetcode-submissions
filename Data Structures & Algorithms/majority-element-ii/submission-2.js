class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const res = []

        const s = nums.length

        // Get the freq with HashMap O(N)
        const frequencies = new Map()

        for(const num of nums){
            let value = frequencies.get(num)
            if(!value){
                frequencies.set(num, 1)
                
            } else {
                frequencies.set(num, ++value)
            }
        }
        
        // Loop through the hashMap and get the elements > n / 3 O(N)
        for(const [key, freq] of frequencies){
            if(freq > s / 3) res.push(key)
        }

        return res;
    }
}
