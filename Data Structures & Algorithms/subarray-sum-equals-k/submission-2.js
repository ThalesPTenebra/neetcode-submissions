class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // [2,-1,1,2] k = 2
        // [2, 1,2,4]

        // create a map<prexNum, frequency>
        // loop through the array checking how much prefix we do have that attent:
        // prefix[current] - k => exists? If yes -> sum how much prefix exists that yes

        // set 0 with freq 1 once, because we can get s - k = 0 ever
        const map = new Map()
        map.set(0, 1)
        
        let count = 0;
        const prefixes = []

        let sum = 0;
        for(const num of nums){
            sum += num;
            prefixes.push(sum)
        }

        for(const prefix of prefixes){
            let target = prefix - k
            if(map.has(target)){
                count += map.get(target)
            }

            map.set(prefix, (map.get(prefix) ?? 0) + 1)
        }

        return count
    }
}
