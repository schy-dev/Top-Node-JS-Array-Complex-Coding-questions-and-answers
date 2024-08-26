/*10. Find All Subsequences
Write a function that returns all subsequences of a given array. A subsequence is a sequence that can be derived by deleting some or no elements of the array without changing the order of the remaining elements. For example:

javascript
Copy code
findSubsequences([1, 2, 3]) 
// Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]*/

function findSubsequences(arr) {
    const subsequences = [[]];
    
    for (let i = 0; i < arr.length; i++) {
      const len = subsequences.length;
      for (let j = 0; j < len; j++) {
        subsequences.push([...subsequences[j], arr[i]]);
      }
    }
    
    return subsequences;
  }
  
  // Example
  console.log(findSubsequences([1, 2, 3])); 
  // Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
  