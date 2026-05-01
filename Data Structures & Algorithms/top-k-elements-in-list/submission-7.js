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
        // SOMEHOW CHECK FREQUENCY OF THE ARRAY ELEMENTS - O(N)
        let freqMap = new Map()

        for(const num of nums){
            if(freqMap.has(num)){
                freqMap.set(num, freqMap.get(num) + 1)
            } else {
                freqMap.set(num, 1)
            }
        }

        // GET THE TOP K OF THEM

        // 1 - SORT O(nLogN) - bucketSort O(N)

        const buckets = Array.from({length: nums.length + 1}, () => [])
        console.log(buckets)

        for(const [key, value] of freqMap){
            console.log(key, "1")
            buckets[value].push(key)
        }

        console.log(buckets)

        let counter = 0
        for(let i = buckets.length - 1; i >= 0; i--){
            if(counter >= k) break
            if(buckets[i].length > 0){
                topKElements.push(...buckets[i])
                counter += buckets[i].length;  
            }
        }


        return topKElements;
    }
}
