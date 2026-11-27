class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        abs_list = list(map(lambda n: abs(n - x), arr))
        s = sum(abs_list[0: k])
        min_i = 0
        for i in range(1, len(arr) - k + 1):
            s_abs = s - abs_list[i - 1] + abs_list[i + k - 1]
            if s_abs < s:
                s = s_abs
                min_i = i
        return arr[min_i: min_i + k]
        