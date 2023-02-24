/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits==='')return[];
    var dl=digits.length;
    var d={'2':['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],'6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z']};
    var a=(i,s)=>i+1<dl?digits[i]!='7'&& digits[i]!='9'?a(i+1,s+d[digits[i]][0]).concat(a(i+1,s+d[digits[i]][1]).concat(a(i+1,s+d[digits[i]][2]))):a(i+1,s+d[digits[i]][0]).concat(a(i+1,s+d[digits[i]][1]).concat(a(i+1,s+d[digits[i]][2]).concat(a(i+1,s+d[digits[i]][3])))):digits[i]!='7'&&digits[i]!='9'?[s+d[digits[i]][0],s+d[digits[i]][1],s+d[digits[i]][2]]:[s+d[digits[i]][0],s+d[digits[i]][1],s+d[digits[i]][2],s+d[digits[i]][3]];
    return a(0,'');
};
