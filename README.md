# 3x3-equation-solver [![Support this project][donate-now]][paypal-donations]

Solves systems of 3 equations with three unknowns.

## Installation

```sh
$ npm i 3x3-equation-solver
```

## Example

```js
// Dependencies
var Solver = require("3x3-equation-solver");

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
```

## Documentation

### `Solver(input, raw)`
Solves the system of equations.

#### Params
- **Array** `input`: An array of arrays containing the coeficients and the results. Example:
   ```js
   [
       3,  1, -5, 5
     , 4,  2,  7, 19
     , 5, -4,  1, 6
   ]
   ```
- **Boolean** `raw`: If it is true, the return value will be an object like described below. Otherwise, the result array will be returned.

#### Return
- **Object|Array** The actual result (if `raw` is not true) or an object containing the following fields:
 - `result` (Array): An array of three values containing the unknown values.
 - `coefficients` (Array): An array of arrays containing the coefficients.
 - `results` (Array): The equation results.
 - `determinant` (Number): The determinant value.
 - `determinants` (Array): The unknown determinants.
 - `solved` (Boolean): If `true`, that means the system has a solution, otherwise.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md