// let arr = new Array(10, 11, 7, 9, 3, 2, 1, 15);
let arr = new Array(11, 13, 21, 3);
let n = arr.length;
let arr1 = new Array(n);
console.log(arr);
let stack = [];
//greater element
function isEmpty(stack) {
  return stack.length === 0 ? true : false;
}
stack.push(arr[0]);
for (let i = 1; i < n; i++) {
  // if (isEmpty(stack)) {
  //   stack.push(arr[i]);
  //   continue;
  // }
  while (!isEmpty(stack) && arr[i] > stack[stack.length - 1]) {
    console.log(stack[stack.length - 1] + "---" + arr[i]);
    stack.pop();
  }
  stack.push(arr[i]);
}
while (!isEmpty(stack)) {
  console.log(stack[stack.length - 1] + " --> " + -1);
  stack.pop();
}
