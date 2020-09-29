// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  // We remove the symbol first using RegEx and convert
  // to lower case
  const newStr = str.replace(/[^a-z0-9]/ig, match => '').toLowerCase();
  
  // Find middle point (m) of new string.
  // Split new string into 2 array with same length
  // according to m value
  const m = Math.floor(newStr.length / 2);
  const [a, b] = newStr.length % 2 === 1
    ? [newStr.slice(0, m), newStr.slice(m+1)]
    : [newStr.slice(0, m), newStr.slice(m)];
  
  // Compare every char of (a) and (b) in opposite
  // direction. E.g. first a char with last b charm
  // and so on. Time complexity is O(n/2), because 
  // of Big-O ignores constant terms, so it equal to
  // O(n).
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[b.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

palindrome("never odd or even");
