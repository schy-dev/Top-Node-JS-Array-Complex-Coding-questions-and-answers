/* 2. Array Permutations
Given an array of distinct integers, write a function to return all possible permutations of the array elements. For example:

javascript
Copy code
permute([1, 2, 3]) // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]*/

const array = [1, 2, 3,];

function permute(arr){
    if(arr.length===0)
        return [[]];
    const result=[];
arr.forEach((element, index) => {
    const rest = arr.slice(0,index).concat(arr.slice(index+1))
    const perms=permute(rest);
    perms.forEach(perm =>{
        result.push([element].concat(perm));
    });
});
return result;
}

console.log(permute(array));