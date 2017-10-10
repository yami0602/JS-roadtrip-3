// Video 3.1 accompanies this exercise

// As you progress through The Hoisting Hallows, you reach a thin stone bridge
// where a cluster of Wizard-Devs declare that YOU SHALL NOT PASS.
//
// In order to continue, you must rewrite theBridgeOfHoistingDoom. Reorder the
// statements as they would be interpreted by a JavaScript interpreter, with
// the following rules for evaluation:
//
//  1. For all variable declarations, put the corresponding declarations at the
//     top of the function. Assign them a value of undefined and maintain their
//     order.
//  2. Now that variable declarations have been placed at the top, remove the
//     original declarations, but leave any associated assignments.
//  3. Then, hoist all function declarations to immediately after your variable
//     declarations, maintaining their order as well.
//  4. Function declarations that end up being overwritten by other functions
//     with the same name should be removed from their current place in the
//     load order.
//  5. Any function declarations that end up replacing other functions,
//     however, will not take the place of the previous version, and instead
//     will just fall into the load order behind existing functions.
//  6. Remove any unreachable statements after the first return statement.
//
// Use the code below:

function theBridgeOfHoistingDoom() {
  var ring = undefined;
  var power = undefined;

  function balrog() {
    return "fire";
  }
  function elf() {
    return "pointy ears";
  }
  function balrog() {
    return "whip";
  }
  function wizard() {
    return "white";
  }
  function elf() {
    return "immortal";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
  return elf();
}
