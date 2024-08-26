The provided code implements an LRU (Least Recently Used) cache using a `Map` in JavaScript. Let's break down the code and understand how it works.

### Understanding LRU Cache

An LRU Cache is a type of data structure that removes the least recently used items when the cache reaches its maximum capacity. The key operations are:
- **Get**: Retrieve an item from the cache.
- **Put**: Add an item to the cache. If the cache is full, it evicts the least recently used item.

### Code Breakdown

Here’s a step-by-step explanation of the `LRUCache` class:

#### Constructor

```javascript
constructor(capacity) {
  this.capacity = capacity; // Maximum number of items the cache can hold
  this.cache = new Map();   // Map to store the cache items
}
```
- `capacity` defines the maximum size of the cache.
- `cache` is a `Map` object that stores the key-value pairs. The order of elements in a `Map` reflects the order in which they were inserted.

#### Get Method

```javascript
get(key) {
  if (!this.cache.has(key)) return -1; // Return -1 if the key is not found
  
  const value = this.cache.get(key);   // Get the value associated with the key
  this.cache.delete(key);              // Remove the key-value pair from the cache
  this.cache.set(key, value);          // Reinsert the key-value pair to mark it as most recently used
  return value;
}
```
- **Check Existence**: If the key is not in the cache, return `-1`.
- **Update Usage**: To mark the key as recently used, remove and reinsert the key-value pair. This operation updates its position in the `Map`, making it the most recently used.

#### Put Method

```javascript
put(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key); // Remove the existing key-value pair if the key is already present
  }
  
  this.cache.set(key, value); // Insert the new key-value pair
  
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value); // Remove the least recently used item
  }
}
```
- **Update or Insert**: Remove the old value if the key already exists and insert the new key-value pair.
- **Eviction**: If the cache exceeds its capacity, remove the oldest item. This is done by removing the first key returned by `this.cache.keys().next().value`, which represents the least recently used item.

### Example Execution

```javascript
const lruCache = new LRUCache(2); // Create a cache with capacity 2
lruCache.put(1, 1); // Cache: {1=1}
lruCache.put(2, 2); // Cache: {1=1, 2=2}
console.log(lruCache.get(1)); // Output: 1 (Cache: {2=2, 1=1} - 1 is accessed, becomes most recent)
lruCache.put(3, 3); // Cache: {1=1, 3=3} - Key 2 is evicted, cache size exceeds capacity
console.log(lruCache.get(2)); // Output: -1 (Key 2 was evicted)
```

### Summary

- **`Map`**: The `Map` object is used to maintain the order of elements. The most recently used items are at the end of the `Map`.
- **`get(key)`**: Moves the accessed item to the end of the `Map` to mark it as recently used.
- **`put(key, value)`**: Inserts or updates the item and evicts the least recently used item if the cache exceeds its capacity.

This approach ensures both `get` and `put` operations have an average time complexity of O(1) due to the properties of `Map`.