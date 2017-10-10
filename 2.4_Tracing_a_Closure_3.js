// Video 2.1 accompanies this exercise

// More tricky. More tough! Again, calculate the final value of the result
// variable and alert the value as a number using one line of code. Hehe,
// good luck with this one!

function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
