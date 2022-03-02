// 특정 문자열 위치 확인하기 (lastIndexOf)

// lastIndexOf 메소드는 문자열의 뒤에서부터 일치여부를 확인

const str = "Carpe diem, seize the day";

console.log(`"e"는 ${str.indexOf("e")} 번째 인덱스에 있습니다.`); // "e"는 20 번째 인덱스에 있습니다.
console.log(`대문자 "C"는 ${str.indexOf("C")} 번째 인덱스에 있습니다.`); // 대문자 "C"는 0 번째 인덱스에 있습니다.
console.log(`소문자 "c"는 ${str.indexOf("c")} 번째 인덱스에 있습니다.`); // 소문자 "c"는 -1 번째 인덱스에 있습니다. - c가 존재하지 않아서 -1을 반환.
console.log(`문자열 ", se"는 ${str.indexOf(", se")} 번째 인덱스에 있습니다.`); // 문자열 ", se"는 10 번째 인덱스에 있습니다.
