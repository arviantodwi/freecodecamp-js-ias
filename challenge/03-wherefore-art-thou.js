// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
  // First, to make this challenge easier to solve, we should
  // get all key(s) from source object.
  const sourceKeys = Object.keys(source);
  // Then we start use map and reduce functions to filterize
  // the collection object wether it has matching name and
  // value pair(s).
  const solution = collection.filter(obj => {
    const filteredObj = sourceKeys
      .map(key => {
        return obj.hasOwnProperty(key) && obj[key] === source[key]
      })
      .reduce((a, b) => a && b);

    return filteredObj;
  });

  return solution;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
