// https://restcountries.com/v3/all
// var req = new XMLHttpRequest();
// let req = new XMLHttpRequest();
// req.open("GET", "https://restcountries.com/v3/all", true);
// req.send();
// req.onload = function () {
//   var result = JSON.parse(req.response);
//   console.log(result);
//   for (i in result) {
//     // Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//     console.log("Flag: " + result[i]["flag"]);

//     //Use the same rest countries and print all countries name, region, sub region and population
//     console.log("Name: " + result[i]["name"]["official"]);
//     console.log("Region: " + result[i]["region"]);
//     console.log("Sub Region: " + result[i]["subregion"]);
//   }
// };

// Anonymous functions
// var result = function (arr) {
//   let count = 1;
//   let max = 1;
//   let element = "";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count += 1;
//       }
//     }
//     if (count >= max) {
//       max = count;
//       element = arr[i];
//     }
//     count = 1;
//   }
//   // console.log(element + max + "times");
//   console.log(element + " occurs " + max + " times");
// };
// var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3, 3, 3].sort();
// result(arr);

// Arrow functions
// var res = function (a, b) {
//   return a * b;
// };
// var result = (a, b) => a * b;
// console.log(result(12, 13));

// var result = () => "hello guvi";
// console.log(compute());

// (function (a) {
//   console.log(a);
//   console.log("hello guvi");
// })(12);

//IIFE arrow function representation
// ((a) => {
//   console.log(a);
//   console.log("hello guvi");
// })(12);

// var req = new XMLHttpRequest();
// const apiKey = "d52c0075ae1e9e2ccb6aef2e9c5b3a67";
// req.open("GET", `https://restcountries.com/v3/all`, true);
// // req.open("GET", `https://restcountries.com/v3/capital/${capital}`, true);
// req.send();
// req.onload = function () {
//   var result = JSON.parse(req.response);
//   for (i in result) {
//     try {
//       var name = result[i]["name"]["common"];
//       var latlong = result[i]["latlng"];
//       if (latlong.length === 0)
//         throw new Error("Co-ordinates is not available");
//       weatherData(name, ...latlong);
//     } catch (err) {
//       console.log(err.message);
//     }
//   }

//   function weatherData(name, lat, long) {
//     // console.log(`${name} ${lat} ${long}`);
//     // standard(Default):Kelvin,metric:Celsius,imperial:Fahrenheit
//     let units = "metric";
//     var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;
//     var request = new XMLHttpRequest();
//     request.open("GET", url, true);
//     request.send();
//     request.onload = function () {
//       var data = JSON.parse(request.response);
//       console.log(`${name}:${data["main"]["temp"]}`);
//     };
//   }
// };

// map function
// var arr = [1, 2, 3, 4];
// var result = [2, 4, 6, 8];
// // Multiply array elements by 2
// // 1.for loop
// // Multiply each arr element by 2
// // using map
// // var result = arr.map((ele) => ele * 2);
// // console.log(result);

// var result = arr.map((ele) => {});
// // console.log(result);[undefined,undefined,undefined,undefined]

// // filter function
// var arr = [1, 2, 3, 4];
// // var result = [2, 4];
// // return only even elements
// // 1.for loop
// // 2.check whether the given element is even or not
// // 3.if even push it res arr else ignore it

// // filter function takes function as parameter.Within that function we have the condition that will applied to each and every array element and it will return a new array
// // the new array consist of only such elements that passes the condition here
// var result = arr.filter((ele) => ele % 2 === 0);
// console.log(result);

// var student = [
//   { name: "bob", marks: 60 },
//   { name: "alice", marks: 70 },
//   { name: "michael", marks: 80 },
// ];
// // display names of the students where mark>60
// var result = student
//   .filter((s) => {
//     return s.marks > 60;
//   })
//   .map((ele) => ele.name);
// console.log(result);

// var arr = [1, 2, 3, 4];
// find sum
// 1.for loop
// sum=0
// add each elements + sum

// reduce function
// will take function as a parameter and that function will take 2 params
// accumulator->intial value
// cv->current value

// if intialValue is not given it will take first element as acc value
// if it is given it will be used as balue
// var result = arr.reduce((acc, cv) => acc + cv); /* acc=1(firstElement) ,cv=2*/
// var result = arr.reduce(
//   (acc, cv) => acc + cv,
//   100
// ); /* acc=100(intialValue is given as parameter) ,cv=1(parameter)*/

// let arr = ["apple", "banana", "oranges"];
// function findElement(arr, key) {
//   return arr.indexOf(key) >= 0;
// }
// console.log(findElement(arr, "apple"));
let obj = {
  name: "guvi",
  place: "chennai",
};
console.log(obj.items());
