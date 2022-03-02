// 문자열 자르기 (slice)

// '문자열'.slice(시작 인덱스, 종료 인덱스)

const sentence = "The sun will shine on us again";
console.log(sentence.slice(13)); // shine on us again - 13번째부터 끝까지
console.log(sentence.slice(13, 24)); // shine on us - 13번째부터 24번째까지
console.log(sentence.slice(0)); // The sun will shine on us again - 처음부터 끝까지
console.log(sentence.slice(0, -23)); // The sun - 음수는 뒤에서부터 시작함. 처음부터 뒤에서 23번째까지
console.log(sentence.slice(50)); // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환한다.
console.log(sentence.slice(7, 2)); // 첫 번째 인자보다 두 번째 인자가 크면 slice 함수는 정상적으로 수행되지 않는다.
