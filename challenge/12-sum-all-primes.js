// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

function listOnlyPrimes (max) {
  const primes = [2];
  let p = 3;
  while (p <= max) {
    for (let i = 2; i <= p; i += 1) {
      if (i < p && p % i === 0) {
        break;
      } else if (p == i) {
        primes.push(p);
      }
    }

    p += 1
  }

  return primes;
}

function sumPrimes(num) {
  if (num === 1) {
    return 0;
  } else if (num == 2) {
    return 2;
  }

  const primes = listOnlyPrimes(num);
  const sum = primes.reduce((acc, value) => acc + value);
  return sum;
}

sumPrimes(10);
