// JSON 문자열을 JSON으로 변환하기 (parse)

// JSON.parse(값, 리플레이서)
/*
첫 번째 인자는 stringify 로 변환할 대상 값
두 번째 리플레이서(Replacer)는 JSON으로 변환하기 전에 값을 변경하는 인자.
리플레이서는 필수값이 아니다.
*/

const jsonStr =
  '{"drama":"PET","season":2017,"casting":' +
  '["koyuki","matsumoto jun"],"character":["sumire","momo"]}';

console.log(JSON.parse(jsonStr));
console.log(
  JSON.parse(jsonStr, (key, val) => {
    if (key === "season") val = 2003;
    return val;
  })
);

console.log(JSON.parse("13.1"));
console.log(typeof JSON.parse("13.1"));
console.log(JSON.parse("false"));
console.log(typeof JSON.parse("false"));

console.log(JSON.parse("Kiss Carnival"));
console.log(JSON.parse("[2003, 2017]"));

/* 결과
{ drama: 'PET',
season: 2017,
casting: [ 'koyuki', 'matsumoto jun' ],
character: [ 'sumire', 'momo' ] }
{ drama: 'PET',
season: 2003,
casting: [ 'koyuki', 'matsumoto jun' ],
character: [ 'sumire', 'momo' ] }
13.1
number
false
boolean
Uncaught SyntaxError: Unexpected token K in JSON at position 0
*/
