// 특정 문자열 포함 여부 확인하기

// 문자열.includes(문자열, 인덱스);

const str = "Make your lives extradordinary";

console.log(str.includes("Make")); // true - 일치하는 문자열 있으면 true
console.log(str.includes("Make", 1)); // false - 인덱스 1부터 'Make'와 일치하는 문자열을 확인하여 있으면 true
