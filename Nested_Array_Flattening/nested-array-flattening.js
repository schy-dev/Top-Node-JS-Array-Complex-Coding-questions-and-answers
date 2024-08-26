/*1. Nested Array Flattening
Write a function that flattens a deeply nested array into a single-level array. For example:

javascript
Copy code
flatten([1, [2, [3, [4, 5]], 6]]) // Output: [1, 2, 3, 4, 5, 6]*/
const arr= [1, [2, [3, [4, 5]], 6]];

function flattenArray(array){
   // let newArr=[];
   return array.reduce((acc,val) =>
Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val) ,[])
}

console.log(flattenArray(arr));