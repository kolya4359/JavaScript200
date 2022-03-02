// 문자열을 특정 구분자에 의해 배열로 나누기 (split)

const capitals = `Prague,Czech Republic
Copenhagen, Denmark
Paris, France
Madrid, Spain
Rome, Italy`;

capitals.split("\n").forEach((s) => {
  // 줄바꿈을 구분자로 분리한다.
  const capital = s.split(",")[0]; // 구분자 , 로 분리된 배열 0 인덱스의 요소는 capital 변수에 대입하고
  const country = s.split(",")[1]; // 1 인덱스의 요소는 country 변수에 대입한다.
  console.log(`${capital} is in ${country}`);
});
/* 결과
Prague is in Czech Republic
Copenhagen is in Denmark
Paris is in France
Madrid is in Spain
Rome is in Italy
*/
