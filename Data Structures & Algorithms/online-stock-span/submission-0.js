class StockSpanner {
    constructor() {
        // stack
        this.prices = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.prices.push(price)

        if(this.prices.length === 0){
           return null
        }

        let current = 0
        for(let i = this.prices.length - 1; i >= 0; i--){
            if(this.prices[i] <= price){
                current++
            } else {
                return current
            }
        }

        return current
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
