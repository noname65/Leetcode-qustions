class Solution {
    private static final int[] values=new int[]{0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040};
    public int fib(int n) {
        return values[n];//n>0?n>1?fib(n-1)+fib(n-2):1:0;//(int)Math.round(0.4472135954999579*(Math.pow(1.618033988749895,n)-Math.pow(-0.6180339887498949,n)))
    }
}
