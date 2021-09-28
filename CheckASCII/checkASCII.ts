// hedder to enable input take
// const readlineSync = require("readline-sync");
import readlineSync from "readline-sync";

// take character
let userInput: string = readlineSync.q;

//show character's ASCII value
console.log(userInput.charCodeAt(0));
