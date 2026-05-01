class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let l = 0;
        let r = s.length - 1;
        let temp

        while(l < r){
            temp = s[r]
            s[r] = s[l]
            s[l] = temp
            l++;
            r--;
        }
    }
}
