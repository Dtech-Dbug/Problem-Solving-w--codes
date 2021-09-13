//check a number is prime odd or even

class numbersFunction {
  constructor() {
    this.tool = "Javascript & Nodejs";
    this.type = "modules";
    this.isEven = function (number) {
      if (number !== undefined && number && number % 2 === 0) {
        return true;
      } else if (number === undefined) {
        return "please pass a number as the argument";
      } else {
        return false;
      }
    };

    this.isOdd = function (number) {
      if (number !== undefined && number && number % 2 !== 0) {
        return ` true`;
      } else if (number === undefined) {
        return "please pass a number as the argument";
      } else {
        return false;
      }
    };
  }
}

// console.log(checkNumber);
const numberMania = new numbersFunction();
console.log(numberMania);
console.log(numberMania.isEven(7));
console.log(numberMania.isOdd(6));

module.exports = numberMania;
console.log(module);
