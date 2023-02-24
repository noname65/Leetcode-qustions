class Solution {
    public int fib(int n) {
        return n>0?n>1?fib(n-1)+fib(n-2):1:0;//(int)Math.round(0.4472135954999579*(Math.pow(1.618033988749895,n)-Math.pow(-0.6180339887498949,n)))
    }
}
