/* given a string Finding longest substring without repeating characters */

// abcabcdbb => "abcd"

const find_longest_distinct_substring = (input) => {


  let charMap = {};

  let start = 0; // window start pointer

  let i = 0; // moving pointer

  let len = 0;

  while (i < input.length) {

    if (!charMap[input[i]]) {

      charMap[input[i]] = 1;
      i++;
      len = Math.max(len, i - start)

    } else {

      charMap[input[start]] = undefined;
      start++;
    }


  }

  console.log(len)

  return len;


}

find_longest_distinct_substring("abcabcbb");
find_longest_distinct_substring("bbbbbb");

// complexity
// T: o(n)
// s: o(n)