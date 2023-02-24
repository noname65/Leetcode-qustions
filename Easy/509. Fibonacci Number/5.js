/**
 * @param {number} n
 * @return {number}
 */
var pow = (x, n)=>{
    var reusult = 1.0;
    while(n>0){
        if(n&1)reusult*=x;
        x*=x;
        n=n>>>1;
    }
    return reusult;
};
var fib = (n)=>(Math.round(0.4472135954999579*(pow(1.618033988749895,n)-pow(-0.6180339887498949,n))));
