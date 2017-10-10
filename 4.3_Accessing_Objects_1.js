// Video 4.1 accompanies this exercise

// One of the ranger-devs wants to check how many rangers can go to battle the
// pirates using the Motorboat vehicle.
//
// Using one line of code, access the correct property value
// (with dot notation), and log the amount of rangers that can join the fun to
// the console.

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

console.log(`Only ${vehicle1.capacity} ranges can go to battle.`)