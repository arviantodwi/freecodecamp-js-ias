// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether(n1, n2) {
  // If n1 type is not a number, then return immediately
  if (typeof n1 != 'number') {
    return;
  }
  
  // Declare a function to calculate the sum. Here we are already know
  // that n1 is a number but n2 type is still unknown. We will call this
  // function at the bottom of our main function.
  const sum = (n2) => {
    // If n2 type is a number, then sum n1 and n2 ...
    if (typeof n2 == 'number') {
      return n1 + n2;
    }
    
    // else we return nothing.
    return;
  }
  
  // Here is the tricky part where we call sum function. First we check
  // whether n2 is undefined or not. If n2 is undefined then we return a
  // function. It's useful when we execute our program with something like:
  // addTogether(2)(3);
  // The execution above is incomplete. We have (2) as n1 but (undefined) as n2.
  // Here we return function with n2 as an argument for next execution. So
  // (3) will behave as n2 in our second execution. Now we have both
  // n1 and n2 for our sum function.
  return typeof n2 == 'undefined' ? (n2) => sum(n2) : sum(n2);
}

addTogether(2,3);
