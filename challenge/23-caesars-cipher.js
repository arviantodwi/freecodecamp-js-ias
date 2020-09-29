// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
  const A_CODE = 'A'.charCodeAt();
  const Z_CODE = 'Z'.charCodeAt();
  const gap = Z_CODE - A_CODE + 1;
  const strArr = str.split('');
  const regex = /[A-Z]/;
  
  for (let i = 0; i < str.length; i += 1) {
    if (regex.test(strArr[i])) {
      const currentCharCode = strArr[i].charCodeAt();
      strArr[i] = currentCharCode - 13 >= A_CODE
        ? String.fromCharCode(currentCharCode - 13)
        : String.fromCharCode(currentCharCode - 13 + gap)
    }
  }

  return strArr.join('');
}

rot13("SERR PBQR PNZC");
