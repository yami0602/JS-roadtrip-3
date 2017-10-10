// Video 1.6 accompanies this exercise

// The passengers have arrived at Magnolia Mountain! Take the modifiedNames
// array that you produced in the last challenge, and map a new anonymous
// function on it.
//
// The function should alert the following message to the screen for each passenger in turn:
//
//      Yo, <name>!
//
// Use the code below in your solution.
//
// Note: Since we are creating an alert message, you won’t need to return a
// value or create any new variables. Normally you would use map’s return
// value, but this is just for practice.

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

 modifiedNames.map((name) => {
     console.log(`Yo ${name}!`);
 })               
