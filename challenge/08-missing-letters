// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
  for (let i = 1; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);
    if (str.charCodeAt(i-1) == str.charCodeAt(i) - 2) {
      return String.fromCharCode(charCode-1);
    }
  }

  return;
}

fearNotLetter("abce");
