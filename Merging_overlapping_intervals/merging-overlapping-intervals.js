/*
Problem Statement:
Given a list of intervals where each interval is represented as a pair [start, end], the goal is to merge all 
overlapping intervals into one. An interval [a, b] overlaps with another interval [c, d] if a <= d and b >= c.

For example:

javascript
Copy code
merge([[1, 3], [2, 6], [8, 10], [15, 18]])
// Output: [[1, 6], [8, 10], [15, 18]]
*/
const array = [[1, 3], [2, 6], [8, 10], [15, 18]];
function merge(intervals){
    intervals.sort((a,b)=> {return a[0]-b[0]});
    const merged=[intervals[0]];
for(let i=1;i<intervals.length;i++){
    const lastMerged = merged[merged.length-1];
    const current=intervals[i];
    if(current[0]<=lastMerged[1])
        lastMerged[1]=Math.max(current[1],lastMerged[1]);
    else
        merged.push(current);
}
return merged;
}
console.log(merge(array));