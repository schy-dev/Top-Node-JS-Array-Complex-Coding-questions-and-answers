/*
5. Largest Subarray with Sum Zero
Given an array of integers, write a function to find the largest subarray with a sum of zero. For example:

javascript
Copy code
findLargestSubarray([1, 2, -3, 4, -2, 2, 1, -4, 3]) // Output: [2, -3, 4, -2, 2, 1]
*/

function findLargestSubarray(arr) {
    const map = new Map();
    let maxLen = 0;
    let sum = 0;
    let start = -1, end = -1;
    
    map.set(0, -1);
    
    arr.forEach((value, index) => {
      sum += value;
      
      if (map.has(sum)) {
        const length = index - map.get(sum);
        if (length > maxLen) {
          maxLen = length;
          start = map.get(sum) + 1;
          end = index;
        }
      } else {
        map.set(sum, index);
      }
    });
    
    return maxLen > 0 ? arr.slice(start, end + 1) : [];
  }
  
  // Example
  console.log(findLargestSubarray([1, 2, -3, 4, -2, 2, 1, -4, 3])); 
  // Output: [2, -3, 4, -2, 2, 1]
  