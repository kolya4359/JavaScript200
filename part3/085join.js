// 배열에 특정 구분자 넣어 문자형으로 변환하기 (join)

const dialogue = [
  "Fear is the path to the dark side",
  "Fear leads to anger",
  "Anger leads to hate",
  "Hate leads to suffering",
  "I sense much fear in you.",
];

console.log(dialogue.join(". ")); // 배열 각 요소 사이에 '.' 구분자를 넣어 하나의 문자열로 병합.
console.log(dialogue.join(".\n")); // 배열 각 요소 사이에 '.\n 구분자를 넣어 하나의 문자열로 방합.
/* 결과
Fear is the path to the dark side. Fear leads to anger. Anger leads to hate.
Hate leads to suffering. I sense much fear in you.
Fear is the path to the dark side.
Fear leads to anger.
Anger leads to hate.
Hate leads to suffering.
I sense much fear in you.
*/
