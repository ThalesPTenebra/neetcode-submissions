class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length === 0) return "";        

        if(strs.length === 1) return strs[0];        

        let result = ""
        let counter = 0;

        while(true){
            let currentLetter = strs[0][counter];
            for(let i = 1; i < strs.length; i++){
                if(!currentLetter || currentLetter !== strs[i][counter]) return result
            }
            counter++;
            result += currentLetter;
        }
    }
}
