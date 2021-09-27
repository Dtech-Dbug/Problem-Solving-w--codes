const readlineSync = require("readline-sync");

let userInput: string = readlineSync.question("char: \n");

// console.log(userInput.charCodeAt(0)); length

let LENGTh: number = userInput.length;
console.log(LENGTh);
