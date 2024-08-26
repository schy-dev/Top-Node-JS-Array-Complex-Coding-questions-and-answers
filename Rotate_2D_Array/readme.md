The function `rotateMatrix` rotates a given `n x n` matrix 90 degrees clockwise. Here’s a detailed explanation of how it works:

### Understanding Matrix Rotation

To rotate a matrix 90 degrees clockwise, each element in the matrix needs to be moved to a new position according to a specific pattern. For an `n x n` matrix, each element at position `(i, j)` needs to be moved to `(j, n-1-i)`.

### Step-by-Step Breakdown of the Function

1. **Initialization**:
   - The function starts by determining the size of the matrix with `n = matrix.length`. This is the number of rows or columns in the square matrix.

2. **Outer Loop (Layer by Layer)**:
   - The outer loop iterates through each layer of the matrix from the outermost layer to the innermost layer. It does this by iterating up to `n / 2` layers. Each layer `i` is processed from the outer edge towards the center.
   - `i` represents the layer index from the outer edge towards the center.

3. **Inner Loop (Elements within a Layer)**:
   - The inner loop processes each element within the current layer. It iterates from `i` to `n - i - 1`. This is because, for each layer, only the elements on the perimeter of the layer need to be rotated, and not the inner ones.
   - `j` represents the column index within the current layer.

4. **Rotation Logic**:
   - For each element `(i, j)` in the current layer:
     - Save the current element in a temporary variable `temp`.
     - Rotate the elements in a specific order:
       - Move the element from the right side to the top side.
       - Move the element from the bottom side to the right side.
       - Move the element from the left side to the bottom side.
       - Move the saved element (from `temp`) to the left side.
   - This order ensures that all elements are correctly rotated 90 degrees clockwise.

5. **Returning the Result**:
   - After all layers have been processed, the matrix is returned, now rotated 90 degrees clockwise.

### Example Execution

Let's walk through the example with the matrix:

```javascript
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

- **First Layer (i = 0)**:
  - Elements to rotate: `(0,0)`, `(0,1)`, `(0,2)`, `(1,2)`, `(2,2)`, `(2,1)`, `(2,0)`, `(1,0)`.
  
  - **Iteration (i = 0, j = 0)**:
    - `temp = 1`
    - `matrix[0][0] = matrix[2][0] = 7`
    - `matrix[2][0] = matrix[2][2] = 9`
    - `matrix[2][2] = matrix[0][2] = 3`
    - `matrix[0][2] = temp = 1`
    - Resulting matrix:
      ```javascript
      [
        [7, 2, 1],
        [4, 5, 6],
        [9, 8, 3]
      ]
      ```

  - **Iteration (i = 0, j = 1)**:
    - `temp = 2`
    - `matrix[0][1] = matrix[1][0] = 4`
    - `matrix[1][0] = matrix[2][1] = 8`
    - `matrix[2][1] = matrix[1][2] = 6`
    - `matrix[1][2] = temp = 2`
    - Resulting matrix:
      ```javascript
      [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]
      ```

- **End of Rotation**:
  - All elements have been processed, and the matrix is now rotated 90 degrees clockwise.

### Code Implementation

```javascript
function rotateMatrix(matrix) {
  const n = matrix.length;
  
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
  
  return matrix;
}

// Example
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 
// Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
```

### Summary
- The `rotateMatrix` function rotates a square matrix 90 degrees clockwise.
- It processes the matrix layer by layer, rotating the elements in each layer using a temporary variable to hold the values during the rotation process.
- The function operates in `O(n^2)` time complexity, where `n` is the size of the matrix, making it efficient for this type of operation.