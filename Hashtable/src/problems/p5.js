/*
 
 Given an unsorted array of integers, find out the length of the consecutive subsequence of the array.
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4   //[1, 2, 3, 4]
 */

const find_longest_subsequence = (input) => {

  //input.sort => o(nlogn * n)

  const map = {};

  let longest = 0;

  input.forEach(num => map[num] = 1);

  for (let num of input) {


    if (!map[num - 1]) {

      let len = 0;
      while (map[num + len]) {
        len++;
      }
      longest = Math.max(longest, len);

    }
  }

  console.log({ longest })


}

// Complexity: 
// T: o(n)
// S: o(n)
find_longest_subsequence([100, 4, 200, 1, 3, 2]);