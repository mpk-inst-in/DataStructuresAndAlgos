/* You are given an array of integer nums and a value k, find the total number of continuous subarrays
whose sum equals k. */

// brute force solution is o(n2)
// o(n) with sliding window

// [1,1,1,2]
const find_continuous_subarrays = (input, k) => {


  let total = 0; // total number of continuous subarrays

  let sum = 0; // running total of array values

  let start = 0; // window start pointer

  let i = 0; //  moving pointer


  while (i < input.length) {

    if (input[i] === k) {

      total += 1;
      if (i > 0) sum = sum - input[start];
      start++;
      i++;
      continue; //
    }

    sum += input[i];

    if (sum > k) {

      sum = sum - input[start];
      start++;


    }

    if (sum === k) {

      total += 1;
      sum = sum - input[start];
      start++;

    }

    i++;


  }

  console.log(total);


}


// find_continuous_subarrays([2, 1, 1, 1, 2], 2);


find_continuous_subarrays([3, 1, 2, 3, 2, 1], 3); // [3], [1,2], [3],[2,1]

// T: o(n)
//s : o(1)