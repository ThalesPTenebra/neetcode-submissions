class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(const x of nums){
            map.set(x, (map.get(x) || 0) + 1)
        }

        const minHeap = new MinPriorityQueue(a => a.value)

        for(const [key, value] of Array.from(map)){
            minHeap.enqueue({key, value})
            if(minHeap.size() > k){
                minHeap.dequeue()
            }
        }

        const result = []
        for(let i = 0; i < k; i++){
            result.push(minHeap.dequeue().key)
        }

        return result
    }
}
