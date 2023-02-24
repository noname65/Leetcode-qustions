/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var sl=s.length,pl=p.length;
    var a=(i,j)=>i<sl?j<pl&&(j+1<pl&&p[j+1]==="*"?((s[i]===p[j]||p[j]===".")&&a(i+1,j))||a(i,j+2):(s[i]===p[j]||p[j]===".")&&a(i+1,j+1)):j+1<pl&&p[j+1]==="*"?a(i,j+2):j>=pl||(j+1<pl&&p[j+1]==="*");
    return a(0,0);
};
