class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        s = s.toLowerCase();

        while (i < j){
            if(!this.isAlphanum(s[i])){
                i++;
                continue;
            }
            if(!this.isAlphanum(s[j])){
                j--;
                continue;
            }
            if(s[i] !== s[j]) return false
            i++;
            j--;
        }

        return true
    }

    isAlphanum(char){
        return /[a-z0-9]/i.test(char);
    }
}


