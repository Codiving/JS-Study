// 예제 1
// const arrived = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("도착"), 1000);
//   });
// };

// const calling = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("띵동"), 1000);
//   });
// };

// const open = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("문열림"), 1000);
//   });
// };

// arrived()
//   .then(console.log)
//   .then(calling)
//   .then(console.log)
//   .then(open)
//   .then(console.log);

// 예제 2.
// const hunt = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("꿩 잡기 성공");
//     }, 1000);
//   });
// };

// const move = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("꿩이 도망갔다. 꿩 대신 닭 먹어야지"));
//     });
//   });
// };

// const cook = bird => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${bird} 요리 완성`);
//     }, 1000);
//   });
// };

// 예제 2-1.
// hunt(true)
//   .then(console.log)
//   .then(move)
//   .catch(err => {
//     console.error(err);
//     return "닭";
//   })
//   .then(cook)
//   .then(console.log);

// 예제 2-2.
// hunt(true)
//   .then(console.log)
//   .then(move)
//   .then(cook)
//   .then(console.log)
//   .catch(error => {
//     console.error(error);
//     console.log("중간에 실패한 자는 밥을 먹을 이유가 없다.");
//   });

// 예제 3.
// const promise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("성공");
//     }, 1000);
//   });
// };

// promise()
//   .then(() => {
//     console.log("1단계 성공");
//   })
//   .then(() => {
//     console.log("2단계 성공");
//   })
//   .then(() => {
//     console.log("3단계 실패");
//     throw new Error("3단계 실패");
//   })
//   .then(() => {
//     console.log("4단계 패스 됨");
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .then(() => {
//     console.log("4단계 패스되고 5단계 진입");
//   })
//   .then(() => {
//     console.log("6단계 끝");
//   });

// 예제 4.(callback to promise)
const eat = food => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (food === "초밥" || food === "고기") resolve(food);
      else reject(new Error("초밥, 고기 외 먹지 않습니다."));
    }, 1000);
  });
};

const brushTeeth = food => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (food === "초밥") resolve(`${food}을(를) 맛있게 먹고 양치까지 끝`);
      else reject(`${food}를 먹고 체해서 양치를 하지 못 했음`);
    }, 1000);
  });
};

const washingFace = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("세수 깔끔하게 성공"), 1000);
  });
};

eat("초밥")
  .then(brushTeeth)
  .then(console.log)
  .then(washingFace)
  .then(console.log)
  .catch(console.error);

eat("고기")
  .then(brushTeeth)
  .then(console.log)
  .then(washingFace)
  .then(console.log)
  .catch(console.error);

eat("샌드위치")
  .then(brushTeeth)
  .then(console.log)
  .then(washingFace)
  .then(console.log)
  .catch(console.error);
