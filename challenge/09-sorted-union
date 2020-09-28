// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(arr) {
  let additionalArray = [];
  let i = 1;
  while (arguments[i]) {
    additionalArray = additionalArray.concat(arguments[i]);
    i += 1;
  }

  const finalArray = additionalArray.reduce((acc, value) => {
    if (acc.indexOf(value) === -1) {
      return acc.concat(value);
    }

    return acc;
  }, arr);

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
