// {value: x; min: y}
[5, 1, 4, 5]
// {5, -inf} {1, 5} {4, 1} {5, 1}

class MinStack {
    // push - O(1)
    // pop - O(1)
    // top - O(1)
    // getMin - O(n)
    constructor() {
        this.stack = []
        this.min = -Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push({
            value: val,
            prevMin: this.min
        })

        if(val < this.min || this.min === -Infinity){
            this.min = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const node = this.stack.pop()
        this.min = node.prevMin
        return node.value
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].value
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
