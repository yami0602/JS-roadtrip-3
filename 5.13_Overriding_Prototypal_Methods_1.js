// Video 5.12 accompanies this exercise

// The cowboy-devs aren’t having much luck with the native valueOf() method
// provided by the Object prototype. Currently, they get a long list of
// properties, but what they’d really like to know is how far the distance is
// from a post (x, y) to the ranch (0,0).
//
// Your job is to override the valueOf() method using the Fencepost prototype
// to return the exact distance that a post is from the ranch. Here is the
// standard algebraic distance formula:
//
//    square root of [ (x1 - x2)^2  +  (y1- y2)^2 ]
//
// This formula includes points (x1, y1) for the post, and (x2, y2) for the
// ranch. Since the ranch’s coordinates are always (0,0), you should be able
// to shorten this procedure considerably. In other words, you shouldn’t need
// any subtraction at all because of the zero values for the ranch coordinates.
//
// In order to accomplish this, you can use the sqrt() method of JavaScript’s
// built-in Math object! You can place any numerical expression as the
// parameter for the Math.sqrt() method, and it will return the square root
// after evaluating the expression. Use this method carefully in your override.

Math.sqrt(49);        // 7
Math.sqrt(45 + 55);   // 10
Math.sqrt(30 / 6);    // 2.23606797749979
