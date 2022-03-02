// 문자열 자르기 (substr)

// '문자열'.(시작 인덱스, 길이)

const sentence = "Wadanda Forever!!!";
console.log(sentence.substr(8)); // Forever!!! - 8번째부터 끝까지
console.log(sentence.substr(8, 7)); // Forever - 8번째부터 7개의 문자들을 반환.
console.log(sentence.substr(0)); // Wakanda Forever!!! - 처음부터 끝까지
console.log(sentence.substr(-10)); // Forever!!! - 첫 번째 인자가 음수면 뒤에서 부터 위치를 결정. 따라서 뒤에서 10번째부터 끝까지
console.log(sentence.substr(0, -3)); // substr 함수의 두 번째 인자에 음수를 넣으면 정상적으로 수행되지 않음.
console.log(sentence.substr(30)); // 문자열 길이보다 큰 수를 첫 번째 인자에 대입하면 인덱스를 찾지 못하기 때문에 빈 값을 반환.
console.log(sentence.substr(0, 30)); // Wakanda Forever!!! - 처음부터 30번째까지 ( 문자열보다 길이가 길기 때문에 문자열이 전부다 출력)
