// * object structure of composite functions
// ? functions from leetcode problems
// TODO : define the function inside an object | import existing created functions

const reverseInteger = require("./ReverseInteger/reverseInteger");
const twoSums = require("./TwoSumProblem/twoSum");

let compose = {
  twoSumsProblem: twoSums,
  reverseIntegerProblem: reverseInteger,
};

// const { twoSums } = compose;

console.log(process);
