// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = ["Apple", "Mangoes", "Grapes", "Papaya", "Orange"];
//     if (data.length === 5) {
//       resolve(data);
//     } else {
//       reject("Somenthing went wrong");
//     }
//   }, 2000);
// });
// console.log(promise);
// promise.then((result) => console.log(result)).catch((err) => console.log(err));
// const isClean = true;
// const promiseToCleanRoom = new Promise((resolve, reject) => {
//   if (isClean) {
//     resolve("Room is cleaned");
//   } else {
//     reject("Room is not cleaned");
//   }
// });

// promiseToCleanRoom
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const roomClean = new Promise((resolve, reject) => {
  resolve("Room is Cleaned");
});
const removeGarbage = new Promise((resolve, reject) => {
  resolve("Garabge Removed");
});
const getThePrice = new Promise((resolve, reject) => {
  resolve("Won the price!");
});

// roomClean
//   .then((result) => {
//     console.log(result);
//     return removeGarbage;
//   })
//   .then((result) => {
//     console.log(result);
//     return getThePrice;
//   })
//   .then((result) => {
//     console.log(result);
//   });

const promisesAll = Promise.all([roomClean, removeGarbage, getThePrice]);

promisesAll.then((values) => console.log(values));
