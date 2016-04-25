## Documentation

You can see below the API reference of this module.

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

