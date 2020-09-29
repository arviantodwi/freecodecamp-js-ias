// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

function dropElements(arr, func) {
  let i = 0;
  while (i < arr.length) {
    if (func(arr[i]) === true) {
      break;
    }
    i += 1;
  }

  return arr.slice(i);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
