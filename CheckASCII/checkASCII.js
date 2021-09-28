"use strict";
exports.__esModule = true;
// hedder to enable input take
// const readlineSync = require("readline-sync");
var readline_sync_1 = require("readline-sync");
// take character
var userInput = readline_sync_1["default"].q;
//show character's ASCII value
console.log(userInput.charCodeAt(0));
