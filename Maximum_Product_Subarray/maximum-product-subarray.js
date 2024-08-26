/* 8. Maximum Product Subarray
Given an integer array, write a function to find the contiguous subarray (containing at least one number) that has the largest product. For example:

javascript
Copy code
maxProduct([2,3,-2,4]) // Output: 6*/

function maxProduct(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      const tempMax = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
      minProduct = Math.min(nums[i], maxProduct * nums[i], minProduct * nums[i]);
      maxProduct = tempMax;
      result = Math.max(result, maxProduct);
    }
    
    return result;
  }
  
  // Example
  console.log(maxProduct([2, 3, -2, 4])); 
  // Output: 6
  
