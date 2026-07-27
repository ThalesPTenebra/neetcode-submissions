class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const result = new Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length; i++){
            if(stack.length === 0){
                stack.push({val: temperatures[i], idx: i})
                continue
            }

            while(stack.length > 0){
                const top = stack[stack.length - 1]
                if(temperatures[i] > top.val){
                    result[top.idx] = i - top.idx
                    stack.pop()
                } else{
                    stack.push({val: temperatures[i], idx: i})
                    break
                }
            }

            stack.push({val: temperatures[i], idx: i})
        }        


        return result
    }
}
