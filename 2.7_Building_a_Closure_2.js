// Video 2.1 accompanies this exercise

// The developers at Closure Cave admire your closure mastery. To test your
// might, they’ve asked you to modify the warningMaker function in order
// to announce:
//
//  - The number of obstacles. This must be the first parameter.
//  - The specific location of the obstacle found. This must be the
//    second parameter.
//
// In other words, they want to pass a specific number and a specific location
// to the function, and have those values become part of the alert message for
// the obstacle being passed into the warningMaker function.
//
// Update the warningMaker function so that it follows the format below. Use
// the parameters to take the names of the bracketed placeholders:
//
//      Beware! There have been <obstacle> sightings in the Cove today!
//      <number> have been spotted at the <location>!
//
// Use the code below in your solution.
//
// Note: Pay close attention to whitespace! You do not need to call the
// warningMaker function.

function warningMaker(obstacle) {
  return function(number, location) {
    return 'Beware! There have been ' + obstacle +
          ' sightings in the Cove today!\n' + number + ' have been spotted at the ' +  location +'!'
  }
}

const call1 = warningMaker('bats');
const call2 = call1(13, 'south point')
console.log(call2);