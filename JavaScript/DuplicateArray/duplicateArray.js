var arr = [1, 2, 3, 4, 1, 3, 5, 7, 7];

// var sortedArray = new Object();

// arr.filter((item, index) => {
//   // for (i = 0; i < arr.length; i++) {
//   //   let test = arr[i];
//   //   console.log(arr[i]);
//   // }
//   console.log(arr, "-", item, "-", arr[index], "-", index);
//   let same = arr.includes(item) && arr[index] !== index;
//   // const check = item !== item;
//   console.log(same);
// });

for (j = 0; j < arr.length; i++) {
  console.log("First Loop ->", j);
  for (i = 0; i < arr.length; i++) {
    // console.log("Index-->", i);

    console.log(arr);
    // console.log(test);

    const det = {
      index: i,
      item: arr[i],
      // test: arr.splice(i, 1).includes(arr[i]),
    };
    console.table(det);
  }
}
