class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        // 2 pointers -> L, R
        // Sort the array
        // Check if the boat goes solo or with 2 people

        // O(N*LogN)
        people.sort((a, b) => a - b)

        const n = people.length
        let L = 0;
        let R = n - 1
        let boats = 0

        // O(N)
        // 1,2,2,3,3 3
        while(L <= R){
            // Solo?
            if(people[L] + people[R] > limit){
                R--;
            } else {
                L++;
                R--;
            }
            boats++;
        }

        return boats
    }
}
