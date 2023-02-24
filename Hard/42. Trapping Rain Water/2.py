class Solution:
    def trap(self, h: List[int]) -> int:
        result=0
        i=0
        l=0
        r=0
        n=0
        m=0
        lh=len(h)
        while i<lh:
            if h[i]>l:
                l=h[i]
                result+=n
                n=0
            else:n+=l-h[i]
            if h[lh-i-1]>=r:
                r=h[lh-i-1]
                result+=m
                m=0
            else:m+=r-h[lh-i-1]
            i+=1
        return result
