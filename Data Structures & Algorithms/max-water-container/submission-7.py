class Solution:
    def maxArea(self, heights: List[int]) -> int:
        total = 0
        L, R = 0, len(heights) - 1

        while L < R:
            area = min(heights[R], heights[L]) * (R - L)
            if area > total:
                total = area
            
            if heights[L] <= heights[R]:
                L += 1
            else:
                R -= 1
                
        return total