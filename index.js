var A = [
    [16,   -4, 1, -0.8],    // a, b, c
    [16.81, -4.1, 1, -0.9], // d, e, f
    [9, -4.5, 1, -21]       // g, h, j
];

var a = A[0][0]
  , b = A[0][1]
  , c = A[0][2]
  , d = A[1][0]
  , e = A[1][1]
  , f = A[1][2]
  , g = A[2][0]
  , h = A[2][1]
  , j = A[2][2]
  , s1 = A[0][3]
  , s2 = A[1][3]
  , s3 = A[2][3]
  ;

var D = a * e * j
      + d * h * c
      + b * f * g
      - g * e * c
      - d * b * j
      - a * h * f
      ;

if (!D) {
    // TODO Solve with another method (Gauss?)
    console.log("Cannot solve.");
    process.exit();
}

console.log(D);

var x = s1 * e * j
      + s2 * h * c
      + b * f * s3
      - s3 * e * c
      - s2 * b * j
      - s1 * h * f
      ;

var y = a * s2 * j
      + d * s3 * c
      + s1 * f * g
      - g * s2 * c
      - d * s1 * j
      - a * s3 * f
      ;

var z = a * e * s3
      + d * h * s1
      + b * s2 * g
      - g * e * s1
      - d * b * s3
      - a * h * s2
      ;

console.log (x / D, y / D, z / D);
