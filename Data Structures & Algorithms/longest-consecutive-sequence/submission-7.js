class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set([...nums]) // n
        let longest = 0;

        for(let i = 0; i < nums.length; i++){
            let temp = 0; 
            while(true){
                if(set.has(nums[i] + temp)){
                    temp++;
                } else {
                    break;
                }
            }
            longest = Math.max(longest, temp)
        }

        return longest
    }
}
