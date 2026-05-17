class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // Pointer in position i and check if every word in strs has equal strs[i]
        // Memory O(1)
        // Time O(N*M)
        let longestPrefix = ""
        let i = 0;
        while(i < strs[0].length){
            let currentChar = strs[0][i]
            for(const word of strs){
                if(word[i] !== currentChar) return longestPrefix
            }

            longestPrefix += strs[0][i]
            i++;
        }
        

        return longestPrefix
    }
}
