class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Create a setMap with all the values
        const set = new Set([...nums])

        let maxSequency = 0;


        // take one element and search for it's sequencies
        // O(n*k)
        for(let i = 0; i < nums.length; i++){
            let candidate = nums[i]
            if(set.has(candidate - 1)) continue
            
            let counter = 0
            while(true){
                if(set.has(candidate)){
                    counter++;
                    candidate++;
                } else {
                    maxSequency = Math.max(maxSequency, counter)
                    break;
                }
            }
        }

        return maxSequency;
    }
}
