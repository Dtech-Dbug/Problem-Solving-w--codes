// ? npm pack for CLI-interface
const readlineSync = require("readline-sync");

// ? npm pack for CLI cmd colors
const chalk = require("chalk");

// TODO : reverse word using simple for loop
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

// TODO : using methods
const mirrorWords = (word) => {
  // ! step1: turn the word(string) into a array of strings using the split method
  // * sample out put = ['h','e' , 'l', 'l', 'o']
  let slices = word.split("");

  // ! Step2 : to reverse the array of strings, use reverse() method
  //* sample : ['o', 'l', 'l', 'e', 'h']

  // ! join the array of strings using the join operator. alterateively you can also use tostring() method
  let reversed = slices.reverse().join("");
  console.log(reversed);
  return reversed;
};

module.exports = {
  reverseWord,
  mirrorWords,
};

console.log(module.path);
