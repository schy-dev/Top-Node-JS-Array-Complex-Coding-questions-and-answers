The function `findSubsequences` generates all possible subsequences of a given array. Let’s break down how it works:

### Understanding Subsequences

A subsequence is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements. For example, for the array `[1, 2, 3]`, the subsequences are:
- `[]` (empty subsequence)
- `[1]`, `[2]`, `[3]`
- `[1, 2]`, `[1, 3]`, `[2, 3]`
- `[1, 2, 3]`

### Function Breakdown

1. **Initialization**:
   - `subsequences`: A list to store all subsequences. Initially, it contains only the empty subsequence: `[[]]`.

2. **Iterating Over Array Elements**:
   - The outer `for` loop iterates over each element of the input array `arr`.

3. **Generating Subsequences**:
   - For each element `arr[i]`, the inner `for` loop iterates over the existing subsequences in `subsequences`.
   - For each existing subsequence, a new subsequence is created by appending the current element `arr[i]`.
   - This new subsequence is then added to the `subsequences` list.

4. **Returning Result**:
   - The function returns the `subsequences` list, which now contains all possible subsequences of the input array.

### Example Execution

Consider the input array `[1, 2, 3]`.

1. **Initialization**:
   - `subsequences = [[]]`

2. **Processing `1`**:
   - For each subsequence in `[[]]`:
     - Add `1` to `[]` → `[1]`
   - Update `subsequences` to: `[[], [1]]`

3. **Processing `2`**:
   - For each subsequence in `[[], [1]]`:
     - Add `2` to `[]` → `[2]`
     - Add `2` to `[1]` → `[1, 2]`
   - Update `subsequences` to: `[[], [1], [2], [1, 2]]`

4. **Processing `3`**:
   - For each subsequence in `[[], [1], [2], [1, 2]]`:
     - Add `3` to `[]` → `[3]`
     - Add `3` to `[1]` → `[1, 3]`
     - Add `3` to `[2]` → `[2, 3]`
     - Add `3` to `[1, 2]` → `[1, 2, 3]`
   - Update `subsequences` to: `[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]`

### Code Implementation

```javascript
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
```

### Summary

- **Initial State**: Start with the empty subsequence.
- **Generate Subsequences**: For each element, append it to all existing subsequences to create new subsequences.
- **Return**: All subsequences are collected and returned.

The approach efficiently builds up all possible subsequences by leveraging the already computed subsequences and appending the current element to them. The time complexity is \(O(2^n)\), where \(n\) is the length of the input array, because each element doubles the number of subsequences.