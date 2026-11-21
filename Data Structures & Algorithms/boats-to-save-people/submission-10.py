class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        if len(people) == 1:
            return 1
        
        # 1,2,2,3,3  =3
        people.sort()
        l, r = 0, len(people) - 1
        res = 0

        while l <= r:
            sum = people[l] + people[r]
            if sum > limit:
                res += 1
                r -= 1
            else:
                res += 1
                r -= 1
                l += 1
        return res