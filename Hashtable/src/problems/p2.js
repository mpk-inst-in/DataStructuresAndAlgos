/* Given an array of strings, group the anagrams together and return them.
What is an anagram ?
  Two strings are known as an anagram of each other if they contain the same characters.One string is just
a different rearrangement of the other.
  Example 1:
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
Example 3:
Input: strs = ["a"]
Output: [["a"]] */


const _hash = (key) => {

  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i)) % 100;
    // console.log(hash);
  }

  return hash;

}

const groupAnagrams = (inputArr) => {

  //error checking or validation 
  if (!inputArr || inputArr.length === 0) return [];

  const map = {};

  for (let str of inputArr) {


    // const key = str.split('').sort().join(''); //lexicographically sorted
    const hash = _hash(str);
    if (!map[hash])
      map[hash] = [str];
    else
      map[hash].push(str);

  }

  // ["eat", "tea", "tan", "ate", "nat", "bat"]
  // {

  //   "aet": ["ate", "eat", "tea"],
  //   "tan" : ["tan", "nat"]
  // }


  return map;


}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// o(klogk*n) => o(n)

console.log(_hash("ate"));
console.log(_hash("eat"));