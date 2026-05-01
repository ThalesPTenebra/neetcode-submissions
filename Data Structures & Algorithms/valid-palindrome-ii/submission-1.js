class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    checkPalindrome(s, L, R, direction) {
        let tried = false
        while(L < R){
            if(s[L] !== s[R]) {
                if(tried) return false
                tried = true;
                if(direction === "L"){
                    L++;
                    continue;
                }
                if(direction === "R") {
                    R--;
                    continue
                }
            }
            L++;
            R--;
        }        
        
        return true
    }

    validPalindrome(s) {
        // Two pointers
        let R = s.length - 1
        let L = 0;

        let isPalindrome = this.checkPalindrome(s, L, R, "L")
        if(!isPalindrome){
            return !!this.checkPalindrome(s, L, R, "R")
        }

        return true;
    }
}
