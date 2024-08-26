/* 9. Implement LRU Cache
Design and implement an LRU (Least Recently Used) cache using arrays and objects. 
The cache should have get and put methods with O(1) time complexity.*/

class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
    
    get(key) {
      if (!this.cache.has(key)) return -1;
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      
      this.cache.set(key, value);
      
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
    }
  }
  
  // Example
  const lruCache = new LRUCache(2);
  lruCache.put(1, 1);
  lruCache.put(2, 2);
  console.log(lruCache.get(1)); // Output: 1
  lruCache.put(3, 3); // LRU key was 2, evicts key 2
  console.log(lruCache.get(2)); // Output: -1 (not found)
  
