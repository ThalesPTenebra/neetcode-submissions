// All O(1)
// To get add O(1) -> list
// To remove O(1) -> know the place and remove
// To contain O(1) -> know the place and check
// Lista encadeada -> Inserção e remoção rapida

class Node{
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class MyHashSet {
    constructor() {
        this.capacity = 10000
        this.list = new Array(10000).fill(null)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const hash = key % this.capacity
        let ptr = this.list[hash]
        if(!ptr){
            this.list[hash] = new Node(key, null)
        } else {
            if(ptr.value === key) return
            while(ptr.next !== null){
                if(ptr.next.value === key) return
                ptr = ptr.next
            }

            ptr.next = new Node(key, null)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = key % this.capacity
        let ptr = this.list[hash]
        
        if(!ptr) return

        if(ptr.value === key) {
            this.list[hash] = ptr.next
        }

        while(ptr.next){
            if(ptr.next.value === key){
                ptr.next = ptr.next.next
                return
            }

            ptr = ptr.next
        }

        return
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const hash = key % this.capacity

        let ptr = this.list[hash]
        if(!ptr) return false


        while(ptr){
            if(ptr.value === key) return true
            ptr = ptr.next
        }

        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
