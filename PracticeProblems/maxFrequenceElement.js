var result = function (arr) {
  let count = 1;
  let max = 1;
  let element = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    if (count >= max) {
      max = count;
      element = arr[i];
    }
    count = 1;
  }
  // console.log(element + max + "times");
  console.log(element + " occurs " + max + " times");
};
var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3, 3, 3].sort();
result(arr);
