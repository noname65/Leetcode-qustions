import string
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        ld=len(digits)
        if ld<=0:return []
        d={'2':('a','b','c'),'3':('d','e','f'),'4':('g','h','i'),'5':('j','k','l'),'6':('m','n','o'),'7':('p','q','r','s'),'8':('t','u','v'),'9':('w','x','y','z')}
        a=lambda i,s:((a(i+1,s+d[digits[i]][0])+a(i+1,s+d[digits[i]][1])+a(i+1,s+d[digits[i]][2]))if len(d[digits[i]])==3 else(a(i+1,s+d[digits[i]][0])+a(i+1,s+d[digits[i]][1])+a(i+1,s+d[digits[i]][2])+a(i+1,s+d[digits[i]][3])))if i+1<ld else ([s+d[digits[i]][0],s+d[digits[i]][1],s+d[digits[i]][2]]if len(d[digits[i]])==3 else[s+d[digits[i]][0],s+d[digits[i]][1],s+d[digits[i]][2],s+d[digits[i]][3]])
        return a(0,'')
