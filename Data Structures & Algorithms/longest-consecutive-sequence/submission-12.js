class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0

        let longest = 1;
        const set = new Set([...nums])

        // loop in nums
        for(const x of nums){
            // check if x - 1 is in Set
            if(set.has(x - 1)) continue
            
            // if no, this is a start of a sequency, loop to find it size
            let counter = 1
            while(true){
                if(set.has(x + counter)){
                    counter++
                } else {
                    break
                }
            }

            if(counter > longest) {
                longest = counter
            }
        }

        return longest
    }
}
