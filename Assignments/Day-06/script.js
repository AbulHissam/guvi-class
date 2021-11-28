// aa = (f, s, t) => {
//   // let f,s,t;
//   console.log(f, s, t);
//   if (f > s && f > t) {
//     console.log(f);
//   } else if (s > f && s > t) {
//     console.log(s);
//   } else {
//     console.log(t);
//   }
// };
// aa(1, 2, 3);

const { arrayBuffer } = require("stream/consumers");

// let n = 123;
// console.log(add(n));
// function add(n) {
//   n = n.toString().split("").map(Number);
//   console.log(n);
//   let sum = 0;
//   for (var i = 0; i < n.length; i++) {
//     sum += n[i];
//   }
//   return sum;
// }

// const arr = [9, 8, 5, 6, 4, 3, 2, 1];
// (function (arr) {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// })(arr);

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function (arro) {
//   for (var i = 0; i <= arro.length; i++) {
//     console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//   }
// };
// ano(arr);

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       console.log(arr[i]);
//     }
//   }
// })(arr);

// (function (str) {
//   str1 = str.split("").reverse().join("");
//   console.log(str1);
// })("abcd");

// var res = function (arr) {
//   let newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i].toLowerCase()) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// };
// res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

// var array = [
//   [
//     ["firstname", "vasanth"],
//     ["lastname", "Raje"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstname", "Sri"],
//     ["lastname", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];
// var final = [];
// while (array.length != 0) {
//   var outer_remove = array.shift();
//   var new_object = {};

//   while (outer_remove.length != 0) {
//     var inner_remove = outer_remove.shift();
//     var key = inner_remove[0];
//     var value = inner_remove[1];
//     new_object[key] = value;
//   }
//   final.push(new_object);
// }
// console.log(final);

// var as = [13, 34, 5, 6, 2, 56, 6, 2, 1, 9, 11];
// var s = as.reduce(function (a, c) {
//   if (c % 2 > 0) {
//     return a + c;
//   }
//   return a;
// });
// if (as[0] % 2 === 0) s = s - as[0];
// console.log(s);

aa = (data) => {
  let i = 0,
    j = 0;
  var newArr = data.split("").map(Number);
};
aa("1234");
