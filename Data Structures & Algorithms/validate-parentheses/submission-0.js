class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const n = s.length
        const stack = []
        const pairs = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        for(const char of s){
            if(char in pairs){
                let top = stack.pop()
                if(top !== pairs[char]) return false
            } else {
                stack.push(char)
            }
        }

        if(stack.length > 0) return false

        return true
    }
}
