//1.. 가장 기본 방법
// async function aaa() {
// new Promise((resolve, reject) => {
//   //뭔가 특정 작업

//   if (성공) {
//     resolve();
//   }

//   if (실패) {
//     reject();
//   }
// }).then((res) => console.log(res));
// }

//2..

async function fetchData() {
  console.time("개별 promise 각각");
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공시 받는 데이터");
    }, 2000);
  });
  const result2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공시 받는 데이터");
    }, 3000);
  });
  const result3 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공시 받는 데이터");
    }, 1000);
  });
  console.timeEnd("개별 promise 각각");
}

async function fetchData2() {
  console.time("promise.all");
  await Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공시 받는 데이터");
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공시 받는 데이터");
      }, 3000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공시 받는 데이터");
      }, 1000);
    }),
  ]);
  console.timeEnd("promise.all");
}

fetchData();
fetchData2();
