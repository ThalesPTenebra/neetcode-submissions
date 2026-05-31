class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set([...nums])

        let longest = 0;
        
        for(let i = 0; i < nums.length; i++){
            if(set.has(nums[i] - 1)) continue

            let counter = 1
            while(true){
                if(set.has(nums[i] + counter)){
                    counter++
                } else {
                    if(counter > longest) {
                        longest = counter
                    }
                    break
                }
            }
        }

        return longest
    }
}
