// 문자열 자르기 (substring)

// '문자열'.substring(시작 인덱스, 종료 인덱스)

const sentence = "This will be the end of Wakanda";
console.log(sentence.substring(13)); // the end of Wakanda - 13번째부터 끝까지
console.log(sentence.substring(13, 20)); // the end - 13번째부터 20번째까지
console.log(sentence.substring(0)); // This will be the end of Wakanda - 처음부터 끝까지
console.log(sentence.substring(0, -20)); // substring 메소드는 음수를 넣으면 정상적으로 수행하지 않는다.
console.log(sentence.substring(50)); // 문자열 길이를 뛰어넘는 숫자를 넣으면 빈 값을 반환.
console.log(sentence.substring(20, 13)); // the end - 첫 번째 인자보다 두 번째 인자가 크면 두 개의 인수를 교환하여 수행. 따라서 13번째부터 20번째까지
