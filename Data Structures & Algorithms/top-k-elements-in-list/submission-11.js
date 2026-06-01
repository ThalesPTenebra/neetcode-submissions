class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = Array.from({length: nums.length + 1}, () => [])

        const map = new Map()
        for(const x of nums){
            map.set(x, (map.get(x) || 0) + 1)
        }

        for(const x of Array.from(map)){
            bucket[x[1]].push(x[0])
        }

        const result = []
        for(let i = bucket.length - 1; i > 0; i--){
            if(result.length === k) return result
            if(!bucket[i].length) continue
            result.push(...bucket[i])
        }

        return result
    }
}
