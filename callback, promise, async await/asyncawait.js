// ---------------

// async function asyncFn() {
//   await 비동기함수();
// }

// ---------------

// function getData_1() {
//   return new Promise(resolve => {
//     resolve("data1");
//   });
// }

// function getData_2() {
//   return new Promise(resolve => {
//     resolve("data2");
//   });
// }

// getData_1().then(console.log).then(getData_2).then(console.log);

// ---------------

// function getData_1() {
//   return new Promise(resolve => {
//     resolve("data1");
//   });
// }

// function getData_2() {
//   return new Promise(resolve => {
//     resolve("data2");
//   });
// }

// (async () => {
//   const data_1 = await getData_1();
//   const data_2 = await getData_2();

//   console.log("data_1", data_1);
//   console.log("data_2", data_2);
// })();

// ---------------

// function getData_1() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("data1"), 3000);
//   });
// }

// function getData_2() {
//   return new Promise(async resolve => {
//     setTimeout(() => resolve("data2"), 3000);
//   });
// }

// async function getDatas() {
//   const data1 = await getData_1();
//   const data2 = await getData_2();

//   return [data1, data2];
// }

// getDatas().then(console.log);

// ---------------

// function getData_1() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("data1"), 3000);
//   });
// }

// function getData_2() {
//   return new Promise(async resolve => {
//     setTimeout(() => resolve("data2"), 3000);
//   });
// }

// function getDatas() {
//   return Promise.all([getData_1(), getData_2()]);
// }

// getDatas().then(console.log);

// ---------------

function getData_1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("data1"), 1000);
  });
}

function getData_2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("data2"), 3000);
  });
}

function getData() {
  return Promise.race([getData_1(), getData_2()]);
}

getData().then(console.log);
