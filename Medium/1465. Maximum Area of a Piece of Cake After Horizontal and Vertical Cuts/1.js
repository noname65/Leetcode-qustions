/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts[horizontalCuts.length]=h;
    horizontalCuts[horizontalCuts.length]=h=0;
    horizontalCuts.sort((a,b)=>a-b);
    for(var i=0;i<horizontalCuts.length-1;i++)if(h<horizontalCuts[i+1]-horizontalCuts[i])h=horizontalCuts[i+1]-horizontalCuts[i];
    verticalCuts[verticalCuts.length]=w;
    verticalCuts[verticalCuts.length]=w=0;
    verticalCuts.sort((a,b)=>a-b);
    for(i=0;i<verticalCuts.length-1;i++)if(w<verticalCuts[i+1]-verticalCuts[i])w=verticalCuts[i+1]-verticalCuts[i];
    return (BigInt(w.toString())*BigInt(h.toString()))%BigInt('1000000007');
};
