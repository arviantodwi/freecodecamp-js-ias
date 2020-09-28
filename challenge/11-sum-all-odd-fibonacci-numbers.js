// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumWithWhile (sequences, num) {
  let sum = 0;
  let i = 0;
  while (sequences[i] <= num) {
    if (i == sequences.length - 1) {
      sequences.push(sequences[i] + sequences[i-1]);
    }
    if (sequences[i] % 2 === 1) {
      sum += sequences[i];
    }
    
    i += 1;
  }

  return sum;
}

function sumWithRecursion (sequences, num, sum = 0, i = 0) {
  if (num < sequences[i]) {
    return sum;
  }

  const newSequenceItem = sequences[sequences.length - 1] + sequences[sequences.length - 2]
  const newSum = (sequences[i] % 2 === 1) ? sum + sequences[i] : sum;
  return sumWithRecursion(sequences.concat(newSequenceItem), num, newSum, i + 1);
}

function sumFibs(num) {
  const sequences = [1, 1, 2, 3, 5, 8];
  // const sum = sumWithWhile(sequences, num);
  const sum = sumWithRecursion(sequences, num);
  return sum;
}

sumFibs(1000);
