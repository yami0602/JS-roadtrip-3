// Video 2.1 accompanies this exercise

// You’ve impressed the Closure Cave developers with the improved functionality
// of your warning messages. They’ve built a few warning generators and are
// ready for any danger that comes up. Suddenly, the radio crackles to life:
//
//    Developers, mayday. Developers, mayday!
//
//    I’ve got 6 killer penguins on the loose near the "Ice Caves"!
//
//    And 1 snow yeti rampaging across the "Blizzard Beach"!
//
//    Over and out!
//
// Review the already-built warning messages, and call the appropriate functions
// for this situation, making sure to pass in the appropriate parameters. You’ll
// need only two lines of code.
//
// Use the code below in your solution.

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");
