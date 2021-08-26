// * object structure of composite functions
// ? functions from leetcode problems
// TODO : define the function inside an object | import existing created functions

const reverseInteger = require("./ReverseInteger/reverseInteger");
const twoSums = require("./TwoSumProblem/twoSum");
const shift = require("./ArrayRotation/arrayRotation");

let compose = {
  twoSumsProblem: twoSums,
  reverseIntegerProblem: reverseInteger,
  shift,
};

// const { twoSums } = compose;

console.log(compose.shift([1, 2, 3, 4, 5], 3));
