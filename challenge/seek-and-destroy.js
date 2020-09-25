// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

// Filter function for our recursion
function filter(target, candidates, result = []) {
  // If candidates array is empty then return result
  if (!candidates.length) {
    return result;
  }

  // Replace target with result if the result array is not empty
  if (result.length) target = result.slice();

  // Let's do the process. First we are creating new candidates
  // variable for later use.
  let newCandidates;
  // Assign result with filtered target.
  result = target.filter(number => number !== candidates[0]);
  // And assign new candidates for next recursion.
  newCandidates = candidates.slice(1);
  
  return filter(target, newCandidates, result);
}

// Main function
function destroyer(arr) {
  // Here we are creating an array of candidates from the
  // arguments object.
  const candidates = Array.from(arguments).slice(1);
  // Here we call filter function to get our solution.
  const solution = filter(arr, candidates);
  
  return solution;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
