// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
  // First we create a dictionary
  const roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }
  const str = [];
  
  // Loop while number is greater than 0
  while (num > 0) {
    // Here we set the numeric basis. Reset on each iteration.
    // e.g. number is 4000, basis is 1000 (10^3)
    const basis = Math.pow(10, String(num).length - 1);
    // Head is the first digit of the number.
    // e.g. number is 4000, head is 4
    let head = Math.floor(num / basis);
    
    if (basis == 1000) {
      str.push(roman[basis]);
      head = 1;
    } else { // basis is under 1000
      switch (head) {
        case 5: // V
        case 6: // VI, start with V
        case 7: // VII, start with V and so on.
        case 8: // So we will always use 5 as a head for [5 ... 8] range.
          str.push(roman[5 * basis]);
          head = 5;
          break;
        case 4:
        case 9:
          str.push(roman[basis].concat(roman[(head + 1) * basis]));
          break;
        default: // for [1 ... 3] range
          str.push(roman[basis]);
          head = 1;
          break;
      }
    }
  
    // At the end of each iteration, we subtract number with their head multiplied
    // by the basis. E.g. number is 4069, head is 4,
    // so new number is 4069 - (4 * 1000) = 69.
    num -= head * basis;
  }

  return str.join('');
}

convertToRoman(4069); // MMMMLXIX
