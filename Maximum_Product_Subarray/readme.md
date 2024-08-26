The function `maxProduct` is designed to find the contiguous subarray within a given array of integers that has the maximum product. This problem is challenging because it involves both positive and negative numbers, which can flip the sign of the product. Here’s a detailed explanation of how the function works:

### Problem Breakdown

When you compute the product of contiguous subarrays, the maximum product can be influenced by:
- The current number being positive or negative.
- The presence of negative numbers, which can turn a large negative product into a positive one if multiplied with another negative number.

### Approach

To solve this problem, you need to keep track of both the maximum and minimum products at each step because:
- The maximum product could be the result of the current number alone.
- It could also result from multiplying the current number with the previous maximum product or minimum product.

### Explanation of the Function

```javascript
function maxProduct(nums) {
    let maxProduct = nums[0]; // Initialize maxProduct with the first element
    let minProduct = nums[0]; // Initialize minProduct with the first element
    let result = nums[0];     // Initialize result with the first element

    for (let i = 1; i < nums.length; i++) {
      const tempMax = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
      minProduct = Math.min(nums[i], maxProduct * nums[i], minProduct * nums[i]);
      maxProduct = tempMax;
      result = Math.max(result, maxProduct);
    }

    return result;
}
```

1. **Initialization**:
   - `maxProduct` keeps track of the maximum product of the subarray ending at the current position.
   - `minProduct` keeps track of the minimum product of the subarray ending at the current position. This is needed because multiplying a negative number with the minimum product can yield a high positive product.
   - `result` stores the overall maximum product found.

2. **Iteration**:
   - **Calculate `tempMax`**:
     - `nums[i]`: The current number alone.
     - `maxProduct * nums[i]`: The maximum product ending at the previous position multiplied by the current number.
     - `minProduct * nums[i]`: The minimum product ending at the previous position multiplied by the current number.
     - The `Math.max` function determines the maximum of these three values, which becomes the new `maxProduct` for the current iteration.
   - **Update `minProduct`**:
     - `nums[i]`: The current number alone.
     - `maxProduct * nums[i]`: The maximum product ending at the previous position multiplied by the current number.
     - `minProduct * nums[i]`: The minimum product ending at the previous position multiplied by the current number.
     - The `Math.min` function determines the minimum of these three values, which becomes the new `minProduct` for the current iteration.
   - **Update `result`**:
     - `result` is updated with the maximum value between the current `result` and the newly computed `maxProduct`.

3. **Return Result**:
   - The function returns the `result`, which contains the maximum product of any contiguous subarray.

### Example Execution

For the input array `[2, 3, -2, 4]`:

1. **Initialization**:
   - `maxProduct = 2`
   - `minProduct = 2`
   - `result = 2`

2. **Iteration**:
   - For `i = 1` (element = 3):
     - `tempMax = Math.max(3, 6, 6) = 6`
     - `minProduct = Math.min(3, 6, 6) = 3`
     - `maxProduct = 6`
     - `result = Math.max(2, 6) = 6`
   
   - For `i = 2` (element = -2):
     - `tempMax = Math.max(-2, -12, -6) = -2`
     - `minProduct = Math.min(-2, -6, 12) = -12`
     - `maxProduct = -2`
     - `result = Math.max(6, -2) = 6`
   
   - For `i = 3` (element = 4):
     - `tempMax = Math.max(4, -8, -48) = 4`
     - `minProduct = Math.min(4, -8, -48) = -48`
     - `maxProduct = 4`
     - `result = Math.max(6, 4) = 6`

3. **Final Result**:
   - The function returns `6`, which is the maximum product of the contiguous subarray `[2, 3]`.

### Summary

- **Tracking**: Use two variables to track the maximum and minimum products at each position to account for both positive and negative products.
- **Update**: Continuously update these variables as you iterate through the array.
- **Result**: The maximum product of any contiguous subarray is stored and returned.

This approach ensures that you efficiently compute the maximum product with a time complexity of O(n), where n is the length of the input array.