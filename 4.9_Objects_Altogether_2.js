// Video 4.1 accompanies this exercise

// We need to assign each of the ranger-devs to a super-blinding light bulb
// based on their station number. So we’re building a function that creates an
// alert message for the ranger-devs in the following format:
//
//      Avast, me hearties!
//      There be Pirates nearby! Stations!
//      <name>, man the <superblinder>!
//      <name>, man the <superblinder>!
//      <name>, man the <superblinder>!
//
// We’ve created a dontPanic function for you that already contains the alert
// message. Your job is to finish building the list string:
//  1. Create a for loop to loop through all of the rangers at the location,
//     using the numRangers property to keep track.
//  2. Inside the loop, begin by using the correct property to append the name
//     of the current ranger to the list.
//  3. Also, concatenate the text between the ranger name and the superblinder
//     so that it matches the format above.
//  4. Lastly, add the name of the correct super-blinding light bulb from the
//     weaponBulbs array to the list. In order to retrieve the name of the
//     correct bulb, you’ll need to use the ranger’s station number.
//
// Use the code below in your solution:

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthousePointe = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  for (let i = 0; i < location.numRangers; i++) {
    let station = location['ranger' + (i + 1)].station - 1
    list += location['ranger' + (i + 1)]['name'] + ', man the ' + location['weaponBulbs'][station][0] + '\n'
  }
   console.log(list);
}

dontPanic(lighthousePointe);
