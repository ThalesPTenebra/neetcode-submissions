class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        // Create a stack for records
        const record = []

        // loop through operations
        for(const x of operations){
            if(x === "+"){
                let value1 = record[record.length - 1]
                let value2 = record[record.length - 2]
                record.push(value1 + value2)
            } else if(x === "D"){
                let newScore = record[record.length - 1] * 2
                record.push(newScore)
            } else if(x === "C"){
                record.pop()
            } else {
                record.push(Number(x))
            }
        }

        console.log(record)

        // Sum and return
        return record.reduce((acc, curr) => acc + curr, 0)
    }
}
