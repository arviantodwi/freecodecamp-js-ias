// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// 1. Use recursion to check wheter current arr element is array.
//    Continue rewrite elements until arr is flat.
function steamrollArray(arr, i = 0) {
  if (i == arr.length) {
    return arr;
  }

  if (Array.isArray(arr[i])) {
    let sub = [];
    if (!arr[i].length) {
      arr.splice(i, 1);
    } else if (arr[i].length >= 1) {
      if (arr[i].length > 1) {
        sub = arr[i].slice(1);
      }
      arr.splice(i, 1, arr[i][0]);
    }

    return steamrollArray(arr.concat(sub), i);
  }

  return steamrollArray(arr, ++i);
}

steamrollArray([1, [], [3, [[4]]]]);
