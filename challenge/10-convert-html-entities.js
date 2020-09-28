// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

const hashTable = {
  '34': '&quot;', // 34 is char code of "
  '38': '&amp;',  // 38 is char code of &
  '39': '&apos;', // 39 is char code of '
  '60': '&lt;',   // 60 is char code of <
  '62': '&gt;',   // 62 is char code of >
};

function convertHTML(str) {
  // Find match characters using RegEx with insensitive (i) and global (g) flag
  return str.replace(/[^a-z\s]/ig, (match) => {
    return hashTable[match.charCodeAt(0)]
  });
}

convertHTML("Dolce & Gabbana");
