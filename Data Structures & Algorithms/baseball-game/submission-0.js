class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = []

        for(let i = 0; i < operations.length; i++){
            let n = stack.length

            if(operations[i] === "+"){
                if(stack.length < 2) continue

                stack.push(stack[n - 1] + stack[n - 2])
                continue    
            } else if(operations[i] === "C"){
                if(stack.length === 0) continue

                stack.pop()
            } else if(operations[i] === "D"){
                if(stack.length === 0) continue

                stack.push(stack[n - 1] * 2)
            } else {
                stack.push(parseInt(operations[i]))
            }

        }        

        console.log(stack)

        return stack.reduce((acc, item) => {
            return acc + item
        }, 0)
    }
}
