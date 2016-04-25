
# 3x3-equation-solver [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/3x3-equation-solver.svg)](https://www.npmjs.com/package/3x3-equation-solver) [![Downloads](https://img.shields.io/npm/dt/3x3-equation-solver.svg)](https://www.npmjs.com/package/3x3-equation-solver) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Solves systems of 3 equations with three unknowns.

## :cloud: Installation

```sh
$ npm i --save 3x3-equation-solver
```


## :clipboard: Example



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

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
