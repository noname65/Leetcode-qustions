class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda a:a[1],reverse=True)
        i=0
        r=0
        l=len(boxTypes)
        while i<l and truckSize>0:
            t=min(truckSize,boxTypes[i][0])
            r+=t*boxTypes[i][1]
            truckSize-=t
            i+=1
        return r
