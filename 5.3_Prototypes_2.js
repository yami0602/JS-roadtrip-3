// Video 5.1 accompanies this exercise

// The cowboy-devs have determined that they need to put the calves from the
// Canyon, the bulls from the Valley, and the cows from the Forest together
// in one pasture on the Prototype Pastures.
//
// Using the countCattle function that you added to the Array prototype, build
// one line of code to alert the sum of:
//
//  1. The number of canyonCows with a "calf" type.
//  2. The number of valleyCows with a "bull" type.
//  3. The number of forestCows with a "cow" type.
//
//The lists are provided here for your reference:

var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];
var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

// Use the code below in your solution:

Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};
