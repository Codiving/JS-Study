// 동기 callback / sync callback
const syncDishWashing = dishWashing => dishWashing();

console.log("아들아 설거지 해라");
// 엄마가 아들 설거지 하는 걸 지켜보는 중 ...
syncDishWashing(() => console.log("설거지 다 했어"));
// 엄마가 아들 설거지 하는 걸 지켜보는 중 ...
console.log("잘했어. 엄마가 빨래하는 거 보고 배워");

// 비동기 callback / async callback
const asyncDishWashing = (dishWashing, delay) => setTimeout(dishWashing, delay);

console.log("아들아 설거지 해라");
// 엄마가 아들 설거지 하는 걸 지켜보는 것이 아니라 다른 일 하는 중
asyncDishWashing(() => console.log("설거지 다 했어"), 3000);
// 엄마가 아들 설거지 하는 걸 지켜보는 것이 아니라 다른 일 하는 중
console.log("엄마는 빨래하면서 기다릴게 끝나면 말해.");

// callback 지옥 / callback hell
const eat = (food, onSuccess, onError) => {
  setTimeout(() => {
    if (food === "초밥" || food === "고기") onSuccess(food);
    else onError(new Error("초밥, 고기 외 먹지 않습니다."));
  }, 1000);
};

const brushTeeth = (food, onSuccess, onError) => {
  setTimeout(() => {
    if (food === "초밥") onSuccess(`${food}을(를) 맛있게 먹고 양치까지 끝`);
    else onError(`${food}를 먹고 체해서 양치를 하지 못 했음`);
  }, 1000);
};

eat(
  "초밥",
  food => brushTeeth(food, console.log, console.error),
  console.error
);

eat(
  "고기",
  food => brushTeeth(food, console.log, console.error),
  console.error
);

eat(
  "샌드위치",
  food => brushTeeth(food, console.log, console.error),
  console.error
);
const washingFace = () => {
  // ... 있다 치고
};

// callback 지옥 코드
eat(
  "밥먹기",
  () => {
    brushTeeth(
      "양차히기",
      () => {
        washingFace(
          "세수하기",
          () => {},
          () => {
            console.log("에러 처리");
          }
        );
      },
      () => {
        console.log("에러 처리");
      }
    );
  },
  () => {
    console.log("에러 처리");
  }
);
