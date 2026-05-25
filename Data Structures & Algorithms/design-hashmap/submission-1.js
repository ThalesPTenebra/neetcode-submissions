class CustomNode {
    constructor(key, value, next){
        this.key = key
        this.value = value
        this.next = next
    }
}

class MyHashMap {
    constructor() {
        this.limit = 10000
        this.list = new Array(this.limit).fill(null)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hash = key % this.limit

        if(!this.list[hash]){
            // INSERT new node directly
            this.list[hash] = new CustomNode(key, value, null)
        }

        // loop searshing for a existing value
        let ptr = this.list[hash]

        if(ptr.key === key){
            ptr.value = value
            return
        }

        while(ptr.next) {
            if(ptr.next.key === key){
                ptr.next.value = value
                return
            }

            ptr = ptr.next
        } 

        // if not, add in final
        ptr.next = new CustomNode(key, value, null)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hash = key % this.limit

        // search directly
        // if hash does not exist, return -1
        if(!this.list[hash]) return -1

        // if does, loop through the list searching
        let ptr = this.list[hash]
        while(ptr){
            if(ptr.key === key) return ptr.value

            ptr = ptr.next
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = key % this.limit

        if(!this.list[hash]){
            return
        }

        let ptr = this.list[hash]
        if(ptr.key === key){
            this.list[hash] = ptr.next
        }

        while(ptr.next){
            if(ptr.key === key){
                ptr.next = ptr.next.next
            }

            ptr.next = ptr.next
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
