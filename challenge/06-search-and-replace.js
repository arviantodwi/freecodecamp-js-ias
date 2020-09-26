// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function findIndexByReduce(source, target) {
  return source.reduce((index, currentValue, currentIndex) => {
    return (currentValue == target) ? currentIndex : index;
  }, -1)
}

function findIndexByJumpSearch(source, target) {
  const hi = source.length - 1;
  let i = 0;

  while (i <= hi) {
    if (source[i] == target) {
      return i;
    }

    if (i === 0) {
      i += 2;
    } else if (i >= 2) {
      if (source[i-1] == target) {
        return i-1;
      } else if (source[i+1] == target) {
        return i+1;
      }

      if (hi - i == 2) {
        i += 2;
      } else if (hi - i >= 3) {
        i += 3;
      } else if (hi == i || hi - i === 1) {
        return -1;
      }
    }
  }
}

function findIndexByFor(source, target) {
  for (let i = 0; i < source.length; i += 1) {
    if (source[i] == target) {
      return i;
    } else if (i == source.length - 1) {
      return -1;
    }
  }
}

function myReplace(str, before, after) {
  const words = str.split(' ');
  const wordIndex = findIndexByReduce(words, before);
  if (wordIndex == -1) {
    return;
  }

  if (!!(words[wordIndex][0].match(/[A-Z]/))) {
    after = after[0].toUpperCase().concat(after.substring(1));
  } else {
    after = after[0].toLowerCase().concat(after.substring(1));
  }

  words[wordIndex] = after;

  return words.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog while Crazy Fredrick bought many very exquisite opal jewels then suddenly jaded zombies acted quaintly but kept driving their oxen forward and the five boxing wizards jump quickly", "jumped", "leaped");
