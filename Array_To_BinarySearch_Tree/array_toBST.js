/*
7. Array to Binary Search Tree
Write a function that converts a sorted array to a height-balanced binary search tree (BST). For example:

javascript
Copy code
sortedArrayToBST([-10, -3, 0, 5, 9])
// Output: [0, -3, 9, -10, null, 5] (A BST structure)
*/

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
  