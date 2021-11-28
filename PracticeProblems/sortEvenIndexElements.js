let arr = [3, 9, 1, 44, 6];
let evenArr = findEvenPositonElements(arr).sort();
for (let i = 0, j = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    arr[i] = evenArr[j];
    j++;
  }
}
printArr(arr);

function findEvenPositonElements(arr) {
  let evenIndexElementsArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndexElementsArr.push(arr[i]);
    }
  }
  return evenIndexElementsArr;
}

function printArr(arr) {
  let temp = "";
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i] + " ";
  }
  console.log(temp.trim());
}
