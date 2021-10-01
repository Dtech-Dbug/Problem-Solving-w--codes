// * object structure of composite functions
// ? functions from leetcode problems
// TODO : define the function inside an object | import existing created functions

const reverseInteger = require("./ReverseInteger/reverseInteger");
const twoSums = require("./TwoSumProblem/twoSum");
const shift = require("./ArrayRotation/arrayRotation");
const { reverseWord, mirrorWords } = require("../ReverseWord/reverseWord");
const priceCalculator = require("./MarketCalculator/marketCalculator");
const factorial = require("./Factorial/factorial");
const numberMania = require("./Numbermania/numberMania");

let compose = {
  twoSumsProblem: twoSums,
  reverseIntegerProblem: reverseInteger,
  shift,
  reverseWord,
  mirrorWords,
  priceCalculator,
  factorial,
  numberMania,
};

// console.log(compose.shift([1, 2, 3, 4, 5], 3));
// console.log(compose.mirrorWords("Engineer"));
// console.log(compose.priceCalculator("Eggs", 6, 20));
// console.log(factorial(5));
console.log(numberMania.isEven(6));
