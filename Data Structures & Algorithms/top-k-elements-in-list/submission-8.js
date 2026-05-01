class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Is the array aways ordered?
        // If K is zero? NEVER
        // If K > nums size? NEVER

        let topKElements = []
        let numFrequency = new Map()

        for(const num of nums){
            if(numFrequency.has(num)){
                numFrequency.set(num, numFrequency.get(num) + 1)
            } else {
                numFrequency.set(num, 1)
            }
        }
        // 1 - SORT O(nLogN) - bucketSort O(N)

        const frequencyBuckets = Array.from({length: nums.length + 1}, () => [])

        for(const [num, count] of numFrequency){
            frequencyBuckets[count].push(num)
        }


        let topFrequency = 0
        for(let freq = frequencyBuckets.length - 1; freq >= 0; freq--){
            if(topFrequency >= k) break
            if(frequencyBuckets[freq].length > 0){
                topKElements.push(...frequencyBuckets[freq])
                topFrequency += frequencyBuckets[freq].length;  
            }
        }


        return topKElements;
    }
}
