class Solution {
    public int candy(int[] h) {
        int[] c=new int[h.length];
        c[0]=1;
        for(int i=1;i<h.length;i++)c[i]=h[i]>h[i-1]?c[i-1]+1:1;
        int r=c[c.length-1];
        for(int i=c.length-2;i>=0;i--)r+=(c[i]<=c[i+1]?h[i]>h[i+1]?(c[i]=c[i+1]+1):c[i]:c[i]);
        return r;
    }
}
