const readlineSync = require("readline-sync");
const chalk = require("chalk");

function reverseWord(word) {
  //* create an emptyy array to store the user input
  let arr = [];
  // * run a for loopto loop through the user input word
  for (i = 0; i < word.length; i++) {
    // * for each iteration push the value in the arr, created
    arr.push(word[i]);
  }
  console.log(arr.reverse().join(""));
}

reverseWord("world");
