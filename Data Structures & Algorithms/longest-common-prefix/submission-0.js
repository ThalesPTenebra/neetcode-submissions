class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let size = 0;

        for(let i = 0; i < strs[0].length; i++) {
            let equal = true;
            let aux = strs[0][i];
            for(const s of strs){
                if(s[i] !== aux) {
                    equal = false;
                    break;
                }
            }
            if(!equal) {
                return strs[0].slice(0, size);
            } else {
                size++;
            }
        }

        return strs[0].slice(0, size);
    }
}
