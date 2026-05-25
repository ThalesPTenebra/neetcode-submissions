class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // count every element in a freq hashMap -> o(N) + get the higher o(N)
        // sort the array and the middle O(nLog(N)) 
        // colide every element and get who survives -> o(N) but fastern than count

        let elect = nums[0]
        let counter = 1

        for(let i = 1; i < nums.length; i++){
            if(elect === nums[i]){
                counter++
            } else {
                counter--;
                if(counter === 0){
                    elect = nums[i]
                    counter = 1;
                }
            }
        }

        return elect
    }
}
