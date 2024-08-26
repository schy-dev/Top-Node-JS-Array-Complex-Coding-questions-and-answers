The function `sortedArrayToBST` converts a sorted array into a balanced Binary Search Tree (BST). Let's break down how it achieves this:

### Understanding the Problem

A Binary Search Tree (BST) is a tree where:
- The left subtree of a node contains only nodes with values less than the node’s value.
- The right subtree of a node contains only nodes with values greater than the node’s value.
- Both subtrees must also be BSTs.

A balanced BST is a BST where the depth of the two subtrees of every node differs by no more than one.

### Function Breakdown

1. **Base Case**:
   - The function starts by checking if the `nums` array is empty. If it is, it returns `null`, meaning there’s no tree to build.

2. **Recursive Tree Building**:
   - The core of the function is the `buildTree` function, which constructs the BST from a subarray of `nums` defined by the `left` and `right` indices.
   - **Base Case for Recursion**:
     - If `left` index is greater than `right`, it means the subarray is invalid or empty, so it returns `null`.

3. **Finding the Root**:
   - **Midpoint Calculation**:
     - To ensure that the tree remains balanced, we always choose the middle element of the current subarray as the root. This is done using `const mid = Math.floor((left + right) / 2);`.
   - **Creating the Node**:
     - A new tree node is created with the value `nums[mid]`.
     - The left child of this node is the result of a recursive call to `buildTree` for the left subarray (`left` to `mid - 1`).
     - The right child is the result of a recursive call to `buildTree` for the right subarray (`mid + 1` to `right`).

4. **Returning the Result**:
   - The function returns the root of the BST, which is built by recursively constructing subtrees from the sorted array.

### Example Execution

Consider the sorted array `[-10, -3, 0, 5, 9]`.

1. **Initial Call**: 
   - `buildTree(0, 4)`: The entire array from index `0` to `4`.
   - **Midpoint**: `2` (value `0`).
   - **Root Node**: `{val: 0}`.
   
2. **Building Left Subtree**:
   - `buildTree(0, 1)`: Subarray `[-10, -3]`.
   - **Midpoint**: `0` (value `-10`).
   - **Node**: `{val: -10}`.
   - **Left Child**: `buildTree(0, -1)` returns `null` (empty subarray).
   - **Right Child**: `buildTree(1, 1)` for subarray `[-3]`.
     - **Midpoint**: `1` (value `-3`).
     - **Node**: `{val: -3}`.
     - **Left Child**: `buildTree(1, 0)` returns `null`.
     - **Right Child**: `buildTree(2, 1)` returns `null`.

3. **Building Right Subtree**:
   - `buildTree(3, 4)`: Subarray `[5, 9]`.
   - **Midpoint**: `3` (value `5`).
   - **Node**: `{val: 5}`.
   - **Left Child**: `buildTree(3, 2)` returns `null`.
   - **Right Child**: `buildTree(4, 4)` for subarray `[9]`.
     - **Midpoint**: `4` (value `9`).
     - **Node**: `{val: 9}`.
     - **Left Child**: `buildTree(4, 3)` returns `null`.
     - **Right Child**: `buildTree(5, 4)` returns `null`.

4. **Combining Results**:
   - The nodes are combined to form the final BST:
     ```javascript
     {
       val: 0,
       left: {
         val: -10,
         left: null,
         right: {
           val: -3,
           left: null,
           right: null
         }
       },
       right: {
         val: 5,
         left: null,
         right: {
           val: 9,
           left: null,
           right: null
         }
       }
     }
     ```

### Code Implementation

```javascript
function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  
  function buildTree(left, right) {
    if (left > right) return null;
    
    const mid = Math.floor((left + right) / 2);
    const node = {
      val: nums[mid],
      left: buildTree(left, mid - 1),
      right: buildTree(mid + 1, right)
    };
    
    return node;
  }
  
  return buildTree(0, nums.length - 1);
}

// Example
console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]))); 
// Output: {"val":0,"left":{"val":-3,"left":{"val":-10,"left":null,"right":null},"right":null},"right":{"val":9,"left":{"val":5,"left":null,"right":null},"right":null}}
```

### Summary

- The `sortedArrayToBST` function creates a balanced Binary Search Tree from a sorted array.
- It uses the middle element of the current subarray as the root to maintain balance.
- Recursive calls build the left and right subtrees from the remaining elements, resulting in a balanced BST.