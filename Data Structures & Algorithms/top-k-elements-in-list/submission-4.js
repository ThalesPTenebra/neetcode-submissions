class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // 
    topKFrequent(nums, k) {
        const map = new Map()

        for(const x of nums){
            if(!map.has(x)){
                map.set(x, 0);
            }
            map.set(x, map.get(x) + 1)
        }

        const pq = new MaxPriorityQueue((bid) => bid.value);
        for(const [key, value] of map.entries()){
            pq.enqueue({key, value});
        }       

        const res = []
        for(let i = 0; i < k; i++){
            res.push(pq.dequeue().key)
        }

        return res;
    }
}
