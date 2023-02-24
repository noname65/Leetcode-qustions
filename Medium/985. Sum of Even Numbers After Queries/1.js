/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(n, q) {
    var s=0;
    for(i of n)if(i%2==0)s+=i;
    var r=[];
    for(i of q)n[i[1]]%2?(n[i[1]]+=i[0])%2||(s+=n[i[1]]):(i[0]%2?(s-=n[i[1]]):(s+=i[0]),n[i[1]]+=i[0]),r[r.length]=s;
    return r;
};
