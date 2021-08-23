function reverseInteger(number) {
  //initialise this variable to 0. Will hold the revrse state
  let reversed = 0;

  let num = number;

  let last;

  while (num != 0) {
    //get the last digit
    last = num % 10;

    //save the last digits in the revrse var
    reversed = reversed * 10 + last;
    console.log("REVRSED-->", reversed);

    //round the num as it decrease on each loop
    //else the loop runs infinitely
    num = Math.floor(num / 10);
  }
  return reversed;
}

reverseInteger(7864);
