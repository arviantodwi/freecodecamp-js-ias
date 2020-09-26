// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  // First we create array that consists of vowel characters.
  const vowels = ['a', 'i', 'u', 'e', 'o'];
  // Then we check wheter the first character of str argument is a vowel or consonsant.
  // If true then return str appended by 'way' ...
  if (vowels.indexOf(str[0]) >= 0) {
    return `${str}way`;
  }
  
  // ... else return another solution. Check the link above to see how this solution
  // should be created.
  return str.replace(/([^aiueo]+)(\w*)/, (match, p1, p2) => `${p2}${p1}ay`);
}

translatePigLatin("rhythm");
