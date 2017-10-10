// Video 5.1 accompanies this exercise

// The cowboy-devs at the Prototypes Pastures need your help! They have
// multiple lists of cattle being imported from different regions. Each
// individual bovine is represented as an object, and those objects are
// contained within an array. Here’s an example:

var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

// The only problem is that the cowboy-devs don’t have time to go through all
// of the lists and count each specific type of cattle that’s being imported.
// Instead, they want to create a countCattle prototype function that returns
// the total number of cattle:
//
//  1. Add a function called countCattle to the Array prototype. This will
//     allow the cowboy-devs to call the function on any array list (like the
//     canyonCows array).
//  2. The function should take in a kind parameter.
//  3. Inside the function, set up a numKind variable to keep track of how many
//     bulls, cows, or calves are present in the array.
//  4. Use a for loop to loop through all of the array values. You can use this
//     to refer to the current list.
//  5. If the type property of the current array value matches the kind
//     parameter, then increment your numKind variable.
//  6. After your loop, return the numKind variable for the total number of
//     cattle.
//
// Note: You do not need to call the countCattle function. We’ll call it when
// testing your code. You also do not need to include the canyonCows array in
// your code submission.
