// 랜덤값 구하기 (random)

/*
Math 객체의 메소드 random 은 무작위의 실수형 값을 반환한다. Math.random() * (max = min + 1) + min 공식은
'최소~최대 사이의 무작위 실수값'을 반환한다. Math 객체의 floor 메소드를 활용하여 실수를 정수로 변환한다.
*/
const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < 5; i++) {
  console.log(generateRandom(1, 10));
} // 1~10 사이의 랜덤 숫자를 5번 출력

for (let i = 0; i < 5; i++) {
  console.log(generateRandom(10, 100));
} // 10~100 사이의 랜덤 숫자를 5번 출력
