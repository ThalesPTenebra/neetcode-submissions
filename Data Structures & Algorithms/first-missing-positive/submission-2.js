class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const set = new Set([...nums])

        let counter = 1;
        while(true){
            if(set.has(counter)) {
                counter++;
            } else {
                return counter
            }
        }
    }
}
