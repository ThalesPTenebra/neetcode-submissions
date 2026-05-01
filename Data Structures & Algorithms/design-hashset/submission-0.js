class CustomNode {
  value;
  next;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class MyHashSet {
    size;
    capacity;
    set;

  constructor() {
    this.size = 0;
    this.capacity = 10000;
    this.set = new Array(this.capacity).fill(undefined);
  }

  /**
   * @param} key
   * @return {void}
   */
  add(key) {
    const idx = key % this.capacity;

    if (!this.set[idx]) {
      this.set[idx] = new CustomNode(key, null);
    } else {
      let ptr = this.set[idx];

      while (ptr) {
        if (ptr.value === key) return;

        if (!ptr.next) {
          ptr.next = new CustomNode(key, null);
          this.size++;
          return;
        }

        ptr = ptr.next;
      }
    }
  }

  /**
   * @param} key
   * @return {void}
   */
  remove(key) {
    const idx = key % this.capacity;

    if (!this.set[idx]) return;

    let ptr = this.set[idx];

    if (ptr.value === key) {
      this.size--;
      this.set[idx] = ptr.next;
      return;
    }

    while (ptr.next) {
      if (ptr.next.value === key) {
        this.size--;
        ptr.next = ptr.next.next;
        return;
      }

      ptr = ptr.next;
    }
  }

  /**
   * @param} key
   * @return {boolean}
   */
  contains(key) {
    const idx = key % this.capacity;

    if (!this.set[idx]) return false;

    let ptr = this.set[idx];

    while (ptr) {
      if (ptr.value === key) return true;

      ptr = ptr.next;
    }

    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
