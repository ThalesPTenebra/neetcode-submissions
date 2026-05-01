class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanum(c) {
        return /[a-z0-9]/i.test(c)
    }

    isPalindrome(s) {
        s = s.toLowerCase();

        let l = 0;
        let r = s.length - 1;

        while(l < r){
            if(!this.isAlphanum(s[l])) {
                l++
                continue
            }
            if(!this.isAlphanum(s[r])) {
                r--;
                continue
            }
            if(s[l] !== s[r]) {
                return false
            }
            l++
            r--
        }

        return true
    }
}
