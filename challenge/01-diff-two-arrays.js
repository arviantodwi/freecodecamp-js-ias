// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2, diff = [], i = 0) {
  // We use recursion so we need base case(s) to handle the
  // recursive process and then terminate it when we reach
  // the condition of our solution.
  // 
  // BASE CASE 1
  // This is our final check. If one of passed arrays is empty,
  // then we will concatenate both arrays into a single array
  // and return it (hopefully!) as our solution.
  if (!arr1.length || !arr2.length) {
    // Example: arr1 is empty array, arr2 is [1, 2], so the arr2
    // exactly the diff for both arrays.
    diff.push(...arr1.concat(...arr2));
    return diff;
  }

  // BASE CASE 2
  // We also need conditional check to handle the recursion when
  // neither arr1 nor arr2 are empty. Here we will always use all
  // arr1 elements as a diff target and first element of arr2 as a
  // diff candidate.
  // 
  // If first element of arr2 "strictly equal to" n-element of
  // arr1 then ...
  if (arr2[0] === arr1[i]) {
    // First element of arr2 and n-element of arr1 exactly the
    // same. We must remove those elements and recall diffArray().
    arr2.shift();
    arr1.splice(i, 1);
    return diffArray(arr1, arr2, diff, 0);
  }
  // ... else, if we already reach the last element of arr1, it
  // means first element of arr2 is a diff of arr1 (the above
  // condition is not met; last-element of arr1 is not equal to
  // first-element of arr2).
  else if (i == arr1.length - 1) {
    // Set first-element of arr2 as a new diff and remove it
    // immediately from arr2, then recall diffArray();
    diff.push(arr2[0]);
    arr2.shift();
    return diffArray(arr1, arr2, diff, 0);
  }

  // Here we are calling diffArray() only if BASE CASE 1 and
  // BASE CASE 2 are not met. "i+1" means "move the cursor from
  // n-element of arr1 to (n+1)-element of arr1" so we walk
  // and check through all elements of arr1.
  return diffArray(arr1, arr2, diff, i+1);
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
