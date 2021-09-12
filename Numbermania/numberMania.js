//check a number is prime odd or even

class checkNumber {
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
const A = new checkNumber();
console.log(A);
console.log(A.isEven(7));
console.log(A.isOdd(6));
