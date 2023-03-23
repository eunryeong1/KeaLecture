
//랜덤숫자 생성 함수
function generateRandomArray(num) {
    let randomArray = [];
    while (randomArray.length < num) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
      }
    }
    return randomArray;
  }

  export default generateRandomArray;