class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0){
            this.stack.push({val: Number(val), min: val})
        } else{
            let prevMin = this.stack[this.stack.length - 1].min
            
            let min = prevMin > val ? val : prevMin
            this.stack.push({val: Number(val), min})
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min
    }
}
