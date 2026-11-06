class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        maximumW = 0
        for n in people:
            if n > maximumW:
                maximumW = n
        
        bucket = [0] * (maximumW + 1)
        for n in people:
            bucket[n] += 1
        
        pointer = 0
        for i in range(len(bucket)):
            for j in range(bucket[i]):
                people[pointer] = i
                pointer += 1
        
        i, j = 0, len(people) - 1
        res = 0
        while i <= j:
            if people[i] + people[j] <= limit:
                j -= 1
                i += 1
            else:
                j -= 1
            res += 1
        return res