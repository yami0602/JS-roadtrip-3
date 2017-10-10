// Video 5.6 accompanies this exericse

// Now the cowboy-devs are so excited about their robotic fence posts that
// they’ve decided to make a constructor function for fence posts, to which
// they can pass a few parameters and get back a new instance of a post.
//
// Your job is to take the existing genericPost and rebuild all of its
// properties inside a single Fencepost constructor.
//
// For this challenge, you need to use only dot notation.

var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

//  1. Create a Fencepost function and pass in parameters for x, y, and postNum.
//  2. Inside the function, use this to assign those parameters to property
//     names that shadow the ones in genericPost.
//  3. Rather than passing in connectionsTo as a parameter, initialize that
//     property to an empty array value inside the function.
//  4. Then, add sendRopeTo as a method inside the Fencepost function.
//  5. Since the function already expects an array to be present, we no longer
//     need a conditional to check for an undefined value. Remove the
//     conditional statements and modify the sendRopeTo method so that it takes
//     in connectedPost as a parameter, and then pushes connectedPost onto the
//     connectionsTo array.
//
// Use the code above in your solution
