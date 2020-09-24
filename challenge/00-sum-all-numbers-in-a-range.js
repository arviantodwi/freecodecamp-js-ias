// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll([a, b]) {
  // We do a simple sort first. If a is greater than b
  // then we swap their position.
  if (a > b) {
    [a, b] = [b, a];
  }

  // Let's make an initial sum variable, assigned by 0.
  let sum = 0;
  
  // Now we do the loop while a less than or equal to b.
  while (a <= b) {
    // We add sum with current a value ...
    sum += a;
    // ... and increase a by 1.
    a += 1;
  }
  
  // Finally we return the sum.
  return sum;
}

sumAll([1, 4]);
