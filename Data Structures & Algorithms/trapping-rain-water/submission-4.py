class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) <= 2:
            return 0
        
        l, r = 0, len(height) - 1
        maxL, maxR = 0, 0
        area = 0
        
        while l < r:
            if maxL < height[l]:
                maxL = height[l]
            if maxR < height[r]:
                maxR = height[r]
            
            area += max(min(maxR, maxL) - height[l], 0)
            area += max(min(maxR, maxL) - height[r], 0)

            if height[l] <= height[r]:
                l += 1
            else:
                r -= 1

        return area