// Video 3.1 accompanies this exericse

// “THAT WAS TOO EASY AND YOU STILL SHALL NOT PASS. MAYBE AFTER THIS ONE.”
//   - The Wizard-Devs of the Hoisting Hallows
//
// The Wizard-Devs aren’t used to such Hoisting mastery. They’ve concocted a
// new, tougher hoisting analysis that you’ll need to prepare before you can
// cross their bridge. Here are the rules, with some necessary extras:

//  1. For all variable declarations, put the corresponding declarations at the
//     top of the function. Assign them a value of undefined and maintain their
//     order.
//  2. Now that variable declarations have been placed at the top, remove the
//     original declarations, but leave any associated assignments.
//  3. Then, hoist all function declarations to immediately after your variable
//     declarations, maintaining their order as well.
//  4. Any function expression assignment is treated here as executable code,
//     and does not change the load order.
//  5. Remove any unreachable statements after the first return statement.
//
// Use the code below:

function theBridgeOfHoistingDoom() {
  function fellowship() {
    return "friends";
  }
  var sword = "sting";
  var dwarf = function() {
    return "axe";
  };
  var fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  ring();
  return sword;
  fellowship = function() {
    return "mines"
  };
  sword = function() {
    return "glamdring";
  };
  var ring = function() {
    return "precious";
  };
}
