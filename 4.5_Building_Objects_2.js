// Video 4.1 accompanies this exercise

// From the reports of the pirates near Lighthouse Pointe, the ranger-devs
// have determined that the opposition has seriously stepped up their game.
//
// They need to add some important information and power upgrades to their
// existing vehicles. New properties will be added for weapon
// (which gets a String) and submersible (which gets a Boolean).
//
// Use dot notation to make the following changes and additions, in order,
// to the vehicle objects:
//
//  1. The Motorboat will have 4 seats added to its capacity.
//  2. The Jet Ski is not submersible.
//  3. The Submarine will acquire "Torpedoes".
//  4. The Motorboat is not submersible.
//  5. The Jet Ski will acquire "Lasers".
//  6. The Submarine will add bunk beds, doubling its capacity.
//  7. The Motorboat will acquire a "Rear-Mounted Slingshot".
//  8. The Submarine is submersible.
//
// Use the code below in your solution:

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// add and adjust object properties here

vehicle1.capacity +=4;
vehicle1.submersible = false;
vehicle1.weapon = 'Rear-Mounted Slingshot';
vehicle2.submersible = false;
vehicle2.weapon = 'Lasers';
vehicle3.weapon = 'Torpedos';
vehicle3.capacity += vehicle3.capacity;
vehicle3.submersible = true;

console.log(vehicle1)
console.log(vehicle2)
console.log(vehicle3)