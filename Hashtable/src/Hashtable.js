class Hashtable {

  constructor(size) {
    this.size = size;
    this.data = new Array(size);
    this.MAX_LOAD_FACTOR = 0.75;
    this.elementSize = 0;
  }

  _hash(key) {

    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(hash);
    }

    return hash;

  }

  set(key, value) {

    const index = this._hash(key);
    // console.log({ index })

    if (!this.data[index]) {
      this.data[index] = [];
    }

    this.data[index].push([key, value]);
    this.elementSize++;
    const currentLoadFactor = this.elementSize / this.size;

    if (currentLoadFactor > this.MAX_LOAD_FACTOR) {
      console.log({ currentLoadFactor })
      // rehashing
      this.rehash();


    }
    // console.log({ d: this.data[index], index });

  }

  get(key) {
    ///return a value corresponding to the key
    const index = this._hash(key);
    const currentBucket = this.data[index];

    if (currentBucket) {

      for (let i = 0; i < currentBucket.length; i++) {

        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }

      }

    }

    return undefined;

  }


  remove(key) {

    // you gt the hash of the key

    const index = this._hash(key);
    const currentBucket = this.data[index];

    if (currentBucket) {

      for (let k = 0; k < currentBucket.length; k++) {

        const currentElement = currentBucket[k];

        if (currentElement[0] === key) {

          currentElement.splice(k, 1);
          return true;

        }

      }

    }

    return false;


  }

  rehash() {

    let tempData = this.data;

    this.elementSize = 0;
    this.size *= 2;

    this.data = new Array(this.size);

    for (let row = 0; row < tempData.length; row++) {

      if (!tempData[row]) continue;

      let item = 0;

      while (item < tempData[row].length) {

        this.set(tempData[row][item][0], tempData[row][item][1]);

        item += 1;
      }

      console.log("Rehashing Complete...")
    }


  }

}

const hashtable = new Hashtable(2);


// const user = {
//   name: "John",
//   title: "admin"
// }

/// T : O(1) insert, remove, look up , cache, 
// 

// console.log(user.name)

hashtable.set("grapes", 50);
hashtable.set("grapess", 150);
hashtable.set("apples", 250);
hashtable.set("pear", 350);

hashtable.set("guava", 150);

console.log(hashtable)
hashtable.set("mango", 250);
hashtable.set("pineapple", 250);
hashtable.set("orange", 250);
hashtable.set("lemon", 250);

// console.log(hashtable)
// console.log({ v: hashtable.get("grapes") });
// console.log({ v: hashtable.get("apples") });



/// collision resolution
// Separate Chaining, Open Addressing => Linear Probing, Quadratic Probing, Double Hashing

// implementation of remove method
// implementation of rehashing method, load factor