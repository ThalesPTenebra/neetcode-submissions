class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)
        const stack = []
        for(const [index, value] of temperatures.entries()){
            while(stack.length > 0 && stack[stack.length - 1].value < value){
                const top = stack.pop()
                result[top.index] = index - top.index
            }

            stack.push({value, index})


        }
        
        return result

    }
}
