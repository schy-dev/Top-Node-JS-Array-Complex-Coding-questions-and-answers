/* 3. Grouping Anagrams
Given an array of strings, write a function that groups anagrams together. For example:

javascript
Copy code
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]*/

const array=["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(arr){
const map = new Map();
arr.forEach(element => {
    const sorted = element.split('').sort().join('');
    if(map.has(sorted))
        map.get(sorted).push(element)
    else
        map.set(sorted,[element]);
});
return Array.from(map.values());
}
console.log(groupAnagrams(array));