// Video 2.9 accompanies this exercise

// The Dev Girls need you to store each location so that a list of danger zones
// for each obstacle can be reported with every new warning.
//
// Inside the warningMaker function:
//  1. Store each location in an array called zones.
//  2. Add each zone to the list string.
//  3. Report the list of danger zones with the alert message in this format:
//
//    Beware! There have been <obstacle> sightings in the Cove today!
//    <number> have been spotted at the <location>!
//    This is alert #<count> today for <obstacle> danger.
//    Current danger zones are:
//    <zone1>
//    <zone2>
//    <zone3>
//    ...
//
// Use the code below in your solution:

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = ""
    for (let i = 0; i < zones.length; i++) {
      list += zones[i] + '\n'
    }
    // add each location to the zones array
    zones.push(location);
    // add each zone to the list string
    list += zones[count - 1] + '\n'
    console.log("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" + 
          // finish the warning message here
          "Current danger zones are:\n" + list);
  };
}

let one = warningMaker('iceberg')
one(3, 'South Point')
one(3, 'North Point')
one(3, 'East Point')

