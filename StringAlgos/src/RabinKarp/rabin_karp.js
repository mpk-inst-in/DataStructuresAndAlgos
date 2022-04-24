const prime = 3; // prime number used for calculating hash 

// map for maintaining numerical values for each character
const charMap = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26

}

// console.log(charMap['x'])

const searchPattern = (pattern, text) => {

  let index = -1;

  const patternHash = hash(pattern);
  const n = text.length;
  const m = pattern.length;
  let prevHash = hash(text.substring(0, m));

  if (prevHash === patternHash) {
    //return start index;
    return 0;
  }

  for (let i = 1; i < n - m + 1; i++) {

    //store the index
    index = i;
    let currentSegment = text.substring(i, i + m);
    let newHash = calculateNewHash(i, i + m, text, prevHash, pattern);

    if (newHash === patternHash) {

      //hash values are identical. need to check for string equality
      const eqResult = checkEquality(pattern, currentSegment);

      if (eqResult) return index;

    }

    prevHash = newHash;

  }

  // pattern not found in the string.
  return -1;

}

const checkEquality = (str1, str2) => {

  // console.log('Checking equality: ', { str1, str2 });
  return str1.trim() === str2.trim();

}

// Rolling hash using the sliding window algorithm
const calculateNewHash = (start, end, str, oldHash, pattern) => {

  let newHash = oldHash - charMap[str[start - 1]];
  newHash = newHash / prime;
  newHash += charMap[str[end - 1]] * Math.pow(prime, pattern.length - 1);

  return newHash;

}

const hash = (text) => {

  let hashCode = 0;
  for (let k = 0; k < text.length; k++) {

    hashCode += charMap[text[k]] * Math.pow(prime, k)

  }

  return hashCode;

}

let res = searchPattern('def', 'abcdef');
console.log(res);

res = searchPattern('abc', 'abcdef');

console.log(res);

res = searchPattern('xyz', 'abcdef');

console.log(res);


