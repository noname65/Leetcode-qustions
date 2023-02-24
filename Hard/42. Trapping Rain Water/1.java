class Solution {
    public int trap(int[] h) {
        int result=0;
        for(int i=0,l=0,r=0,n=0,m=0;i<h.length;i++){
            if(h[i]>l){
                l=h[i];
                result+=n;
                n=0;
            }else n+=l-h[i];
            if(h[h.length-i-1]>=r){
                r=h[h.length-i-1];
                result+=m;
                m=0;
            }else m+=r-h[h.length-i-1];
        }
        return result;
    }
}
