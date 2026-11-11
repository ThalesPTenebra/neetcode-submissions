class Solution:
    def trap(self, height: List[int]) -> int:
        L, R = 0, len(height) - 1
        maxL, maxR = 0, 0
        area = 0

        while L < R:
            if height[L] > maxL:
                maxL = height[L]
            if height[R] > maxR:
                maxR = height[R]
            
            area += max(0, min(maxL, maxR) - height[L])
            area += max(0, min(maxL, maxR) - height[R])

            if height[L] <= height[R]:
                L += 1
            else:
                R -= 1
        return area