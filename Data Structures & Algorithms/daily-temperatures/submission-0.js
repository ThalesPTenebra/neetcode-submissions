class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // N2 solution is the easier
        const result = []

        for(let i = 0; i < temperatures.length; i++){
            for(let j = i + 1; j < temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    result.push(j - i)
                    break;
                }
            }
            if(!result[i]){
                result.push(0)
            }
        }
        
        return result
    }
}
