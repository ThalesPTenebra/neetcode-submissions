class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        // record X if integer
        // + operate a new score = sum of 2 prev
        // D new score double the 2 prev
        // C remove prev score

        // stack
        // loop for each element, check and operate

        const stack = []
        for(let i = 0; i < operations.length; i++){
            if(operations[i] === "+"){
                const result = stack[stack.length - 1] + stack[stack.length - 2]
                stack.push(result)
            } else if(operations[i] === "D"){
                const result = stack[stack.length - 1] * 2
                stack.push(result)
            } else if(operations[i] === "C"){
                stack.pop()
            } else {
                stack.push(Number(operations[i]))
            }
        }

        return stack.reduce((acc, current) => acc += current, 0)
    }
}
