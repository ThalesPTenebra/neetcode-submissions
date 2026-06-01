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

        const heap = new MinPriorityQueue((x) => x[1])
        for(const pair of Array.from(map)){
            heap.enqueue(pair)
            if(heap.size() > k) heap.dequeue()
        }

        const res = []
        for(let i = 0; i < k; i++){
            res.push(heap.dequeue()[0])
        }

        return res
    }
}
