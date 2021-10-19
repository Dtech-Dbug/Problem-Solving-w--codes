let twoSums = (nums, target) => {
  var diff = "";
  var output = [];
  for (let i = 0; i < nums.length; i++) {
    //subtract the target from each array entry
    diff = target - nums[i];

    //if the difference is included in the array and the index of differance is not equal to the index of operatied entry,
    if (nums.includes(diff) && nums.indexOf(diff) !== nums.indexOf(nums[i])) {
      //get the index

      //push the index/indices in the ouput array
      output.push(nums.indexOf(diff));
      // console.log("o/p-->", output.sort());
    }
  }
  // returning the sorted array indices
  return output.sort();
};

module.exports = twoSums;
