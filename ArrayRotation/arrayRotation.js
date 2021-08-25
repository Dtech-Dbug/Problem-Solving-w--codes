const leftShift = (array, shiftIndices) => {
  let indices = shiftIndices;

  for (j = 0; j < indices; j++) {
    for (i = 0; i < 1; i++) {
      var shiftedDigits = array.splice(i, 1);
      array.push(shiftedDigits[0]);
    }
  }

  console.trace(array);
};

leftShift([1, 2, 3, 4, 5, 6], 2);
