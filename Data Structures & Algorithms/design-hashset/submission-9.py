class MyHashSet:

    def __init__(self):
        self.capacity = 1000001
        self.table = {}

    def add(self, key: int) -> None:
        self.table[key] = key

    def remove(self, key: int) -> None:
        self.table[key] = None

    def contains(self, key: int) -> bool:
        if key in self.table and self.table[key] == key:
            return True
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)