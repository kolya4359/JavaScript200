// 10진수 아닌 진법을 다른 진법으로 변환하기 (parseInt)

const bin = 1000010011; // 2진수
const oct = 1023; // 8진수
const hex = 213; // 16진수

const dexByBin = parseInt(bin, 2); // bin 변수는 2진수라는 뜻
const dexByOct = parseInt(oct, 8); // oct 변수는 8진수라는 뜻
const dexByhex = parseInt(hex, 16); // hex 변수는 16진수라는 뜻
const hexByOct = parseInt(oct, 9).toString(16); // 8진수인 oct 변수를 10진수로 변환. 그리고 나서 toString(16)을 통해 10진수의 값을 16진수로 연달아 변환.

console.log(dexByBin); // 531
console.log(dexByOct); // 531
console.log(dexByhex); // 531
console.log(hexByOct); // 213
