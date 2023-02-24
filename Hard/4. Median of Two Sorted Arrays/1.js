/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (n1, n2)=>(n1=n1.concat(n2).sort((a,b)=>a-b),n1.length%2?n1[~~(n1.length*0.5)]:(n1[n1.length*0.5]+n1[n1.length*0.5-1])*0.5);
