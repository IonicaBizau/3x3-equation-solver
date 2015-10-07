// Dependencies
var Solver = require("../lib");

// 3a + b - 5c = 5
// 4a + 2b + 7c = 19
// 5a - 4b + c = 6
console.log(Solver([
    [3,  1, -5, 5 ]
  , [4,  2,  7, 19]
  , [5, -4,  1, 6 ]
], true));
// =>
// { result: [ 2.442231075697211, 1.7569721115537849, 0.8167330677290837 ],
//   results: [ 5, 19, 6 ],
//   coefficients: [ [ 3, 1, -5 ], [ 4, 2, 7 ], [ 5, -4, 1 ] ],
//   determinant: 251,
//   determinants: [ 613, 441, 205 ],
//   solved: true }
