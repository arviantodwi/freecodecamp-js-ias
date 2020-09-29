// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

// Greatest Common Divison
// Example: gcd(2,3)
// b == 3 !== 0 -> gcd(3, 2%3)
// b == 2 !== 0 -> gcd(2, 2%2)
// b == 0 === 0 -> return 2
function gcd (a, b) {
  if (b === 0) return a;
  return gcd(b, a%b);
}

// Least Commont Multiple
// (a * b) / gcd(a, b)
function lcm (a, b) {
  console.log((a * b) / gcd(a, b));
  return (a * b) / gcd(a, b);
}

// Main Function
// 1.   deconstruct arr elements as min and max so code will be easier to read
// 1.1. sort if min > max
// 2.   if min = 1, we can safely change min to (min + 1), because every number
//      that multiplied and divided by 1 is resulting itself so we will start from 2.
// 3.   we need to find lcm and gcd in range while keeping the current lcm,
//      so we need to loop through all numbers within range.
//      In first iteration, current lcm = min.
// 3.1. increase min value by one at the beginning of each iteration.
// 3.2. set current lcm value by returned new lcm value at the end of each iteration
// 4.   return final lcm
function smallestCommons(arr) {
  let [min, max] = arr;
  if (min > max) [min, max] = [max, min];
  if (min === 1) min += 1;

  let currentLcm = min;
  while (min < max) {
    min += 1;
    currentLcm = lcm(currentLcm, min);
  }

  return currentLcm;
}


smallestCommons([1,5]);
