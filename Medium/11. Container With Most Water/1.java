class Solution {
    public int maxArea(int[] h) {
        int r=0;
        for(int i=0,j,t;i<h.length-1;i++){
            if(h[i]>0){
                t=r>0?(int)(r/h[i]):0;
                for(j=Math.max(i+1,t);j<h.length;j++){
                    t=(j-i)*Math.min(h[i],h[j]);
                    if(r<t)r=t;
                }
            }
        }
        return r;
    }
}
