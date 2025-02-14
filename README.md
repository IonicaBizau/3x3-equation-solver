<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# 3x3-equation-solver

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/3x3-equation-solver.svg)](https://www.npmjs.com/package/3x3-equation-solver) [![Downloads](https://img.shields.io/npm/dt/3x3-equation-solver.svg)](https://www.npmjs.com/package/3x3-equation-solver) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Solves systems of 3 equations with three unknowns.

















## :cloud: Installation

```sh
# Using npm
npm install --save 3x3-equation-solver

# Using yarn
yarn add 3x3-equation-solver
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












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







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


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
























## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
