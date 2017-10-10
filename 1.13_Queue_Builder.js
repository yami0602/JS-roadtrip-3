// Video 1.10 accompanies this exericse

// The devs at Pine Puzzles would like you to treat an array of functions
// like a Queue, passing the result of each function into the next until
// the Queue is empty. They’ve sent you the puzzlers Queue of functions,
// and the following instructions:
//
//  - Build a function and assign it to a variable named applyAndEmpty.
//
//  - The function should take in an input number and a queue of functions as
//    parameters.
//
//  - Using a for loop, call the functions in the queue in order with the input
//    number, where the results of each function becomes the next function’s input.
//
//  - Once done this loop, return from applyAndEmpty the final function’s
//    result. Additionally, the queue should be empty at this point.
//
//  - Lastly, call the applyAndEmpty function using the provided start variable
//    and the puzzlers Queue as arguments, and alert the result.
//
// Use the code below in your solution.

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

const start = 2;

const applyAndEmpty = function(input, queue) {
  let r;
  for (let i = 0; i < queue.length; i++) {
    (i === 0) ? r = queue[i](input) : r = queue[i](r);
  }
  return r;
}

console.log(applyAndEmpty(start, puzzlers));