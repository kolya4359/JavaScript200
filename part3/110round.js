// 특정 자리수에서 반올림하기 (round)

const val = 573.926;

console.log(Math.round(val)); // 574 - 소수점 바로 오른쪽에 숫자 9를 반올림.
console.log(Math.round(val * 10) / 10); // 573.9
console.log(Math.round(val * 100) / 100); // 573.93
console.log(Math.round(val / 10) * 10); // 570
console.log(Math.round(val / 100) * 100); // 600
