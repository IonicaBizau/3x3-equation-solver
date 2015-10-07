
/**
 * Solver
 * Solves the system of equations.
 *
 * @name Solver
 * @function
 * @param {Array} input An array of arrays containing the coeficients and the results. Example:
 *
 *    ```js
 *    [
 *        3,  1, -5, 5
 *      , 4,  2,  7, 19
 *      , 5, -4,  1, 6
 *    ]
 *    ```
 * @param {Boolean} raw If it is true, the return value will be an object like described below. Otherwise, the result array will be returned.
 * @return {Object|Array} The actual result (if `raw` is not true) or an object containing the following fields:
 *
 *  - `result` (Array): An array of three values containing the unknown values.
 *  - `coefficients` (Array): An array of arrays containing the coefficients.
 *  - `results` (Array): The equation results.
 *  - `d` (Number): The determinant value.
 */
function Solver(input, raw) {

    var a = input[0][0]
      , b = input[0][1]
      , c = input[0][2]
      , d = input[1][0]
      , e = input[1][1]
      , f = input[1][2]
      , g = input[2][0]
      , h = input[2][1]
      , i = input[2][2]
      , s1 = input[0][3]
      , s2 = input[1][3]
      , s3 = input[2][3]
      , dd = a * e * i
           + d * h * c
           + b * f * g
           - g * e * c
           - d * b * i
           - a * h * f
      , solved = true
      ;

    if (!dd) {
        solved = false;
    }

    var dx = s1 * e * i
           + s2 * h * c
           + b * f * s3
           - s3 * e * c
           - s2 * b * i
           - s1 * h * f
      , dy = a * s2 * i
           + d * s3 * c
           + s1 * f * g
           - g * s2 * c
           - d * s1 * i
           - a * s3 * f
      , dz = a * e * s3
           + d * h * s1
           + b * s2 * g
           - g * e * s1
           - d * b * s3
           - a * h * s2
      , x = dx / dd
      , y = dy / dd
      , z = dz / dd
      ;

    if (raw) {
        return {
            result: [x, y, z]
          , results: [s1, s2, s3]
          , coefficients: [
                [a, b, c]
              , [d, e, f]
              , [g, h, i]
            ]
          , determinant: dd
          , determinants: [dx, dy, dz]
          , solved: solved
        }
    }

    return [x, y, z];
}

module.exports = Solver;
