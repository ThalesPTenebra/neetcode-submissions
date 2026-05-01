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
                freqMap.set(num, 0)
            }
        }

        // GET THE TOP K OF THEM

        // 1 - SORT O(nLogN) - bucketSort O(N)

        const sortedNums = [...freqMap].sort((a, b) => b[1] - a[1])

        for(let i = 0; i < k; i++){
            topKElements.push(sortedNums[i][0])
        }

        // 2 - MaxHeap - Mount the tree and get the top K of the tree



        return topKElements;
    }
}
