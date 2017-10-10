// Video 4.1 accompanies this exercise

// PIRATES AHOY! It’s time for the ranger-devs to get over to the Lighthouse
// and throw down! Our lighthousePointe object now has a new numRangers property
// to track how many rangers are fighting at the Lighthouse.
//
// Your goal is to complete the addRanger function that takes in location, name,
// skillz, and station as parameters. Then we can pass in our lighthousePointe
// object as the location and start to add rangers.
//
//  1. As rangers are added, increment the number of rangers at the location
//     using its numRangers property.
//  2. Add a property to the location using bracket notation that will be used
//     to hold a ranger object. Specifically, each property will be named
//     ranger1, ranger2, ranger3, etc. This will require string concatenation
//     and the current value of the numRangers property.
//  3. Now that you have your ranger<number> property, assign an object literal
//     to it that contains properties for name, skillz, and station. Then
//     assign values to those properties using the parameters that we pass in.
//  4. Call your addRanger function three times with the appropriate arguments
//     to add the following rangers, in order, to the location:

const ranger1 = {name: "Nick Walsh",     skillz: "magnification burn", station: 2}
const ranger2 = {name: "Drew Barontini", skillz: "uppercut launch",    station: 3}
const ranger3 = {name: "Christine Wong", skillz: "bomb defusing",      station: 1}

// Use the code below in your solution:

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthousePointe = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  location.numRangers++
  // add the ranger<number> property and assign a ranger object
  location['ranger' + location.numRangers] = {name, skillz, station}
  return lighthousePointe;
}

// call addRanger three times to add the new rangers
addRanger(lighthousePointe, ranger1.name, ranger1.skillz, ranger1.station);
addRanger(lighthousePointe, ranger2.name, ranger2.skillz, ranger2.station);
addRanger(lighthousePointe, ranger3.name, ranger3.skillz, ranger3.station);