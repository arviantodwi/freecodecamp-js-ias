// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
  // This challenge is easy if we understand the basics of how
  // RegEx works. We are given few cases:
  // 1. "This Is Spinal Tap"
  // 2. "thisIsSpinalTap"
  // 3. "The_Andy_Griffith_Show"
  // 4. "Teletubbies say Eh-oh"
  // 5. "AllThe-small Things"
  // We must convert these strings into lowercase and all
  // words must be joined by dashes. Let's solve it.
  // 
  // First step is using split by RegEx. Split each words into array
  // if the string has:
  // a. white-space character (\s),
  // b. or (|) a word that start with capital letter (?=[A-Z]),
  // c. or (|) underscore.
  // 
  // After we split the string into the array, we need to join
  // all elements (words) using dashes so it will become a 
  // string again.
  // 
  // Last, convert the joined string to lower case. Easy.
  return str.split(/\s|(?=[A-Z])|_/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
