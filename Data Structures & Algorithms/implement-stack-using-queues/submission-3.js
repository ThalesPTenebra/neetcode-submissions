class MyStack {
    constructor() {
        // RULE 1: REMOVE FROM [0]
        // RULE 2: PUSH INTO LAST POSITION
        this.queue = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // push final, equal stack
        this.queue.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        // Remove from top
        const size = this.queue.length
        for(let i = 0; i < size - 1; i++){
            this.queue.push(this.queue.shift())
        }
        return this.queue.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue[this.queue.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !!(!this.queue.length)
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
