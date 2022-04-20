/* Find out the maximum occurring character in the string given an input string and print it. */

findMaxOccuringChar = (input) => {

  let maxCount = 0;
  let maxOccuringChar = '';

  const frequencyMap = {};

  for (let i = 0; i < input.length; i++) {


    if (!frequencyMap[input[i]]) {
      frequencyMap[input[i]] = 0;
    }

    frequencyMap[input[i]]++;

    if (maxCount < frequencyMap[input[i]]) {
      maxCount = frequencyMap[input[i]];
      maxOccuringChar = input[i];
    }

  }

  console.log(frequencyMap);

  return {
    maxOccuringChar, maxCount
  }


}

//InpuJ:SsJringS=S“abbfed”
console.log(findMaxOccuringChar("abbfed"));

//InpuJ:SsJringS=S“wefeqweeq”
// console.log(findMaxOccuringChar("wefeqweeq"));

