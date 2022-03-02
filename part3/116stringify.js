// JSON을 문자열로 변환하기

// JSON.stringify(값, 리플레이서, 공백 개수)

/*
첫 번째 인자는 JSON 문자열로 변환할 대상 값이다.
두 번째 리플레이서(Replacer) 는 JSON 문자열로 변환하기 전에 값을 변경하는 인자이다.
이때 리플레이서로 콜백함수를 넣거나, 특정 키정보를 담은 배열을 넣어 값을 변경한다.
세 번째 인자 공백 개수는 JSON 문자열의 들여쓰기 시 공백 개수를 의미한다. 1부터 10까지 지정할 수 있고,
null 이나 0 또는 음수인 경우 공백을 사용하지 않는 것으로 간주한다.
*/

const testStringify = {
  stringifiedNum: JSON.stringify(13.1),
  stringifiedStr: JSON.stringify("Kiss Carnival"),
  stringifiedBln: JSON.stringify(false),
  stringifiedArr: JSON.stringify([2003, 2017]),
};

for (let key in testStringify) {
  console.log(`-------------${key}-------------`);
  console.log(typeof testStringify[key]);
  console.log(testStringify[key]);
}

console.log(`-----------------stringifyObj----------------`);
const obj = {
  drama: "PET",
  season: 2017,
  casting: ["koyuki", "matsumoto jun"],
  character: ["sumire", "momo"],
};
console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ["drama", "season"]));
console.log(JSON.stringify(obj, null, 4));
console.log(
  JSON.stringify(
    obj,
    (key, val) => {
      if (key === "season") return 2003;
      return val;
    },
    4
  )
);

/* 결과
----------------stringifiedNum-------------------
string
13.1
----------------stringifiedStr-------------------
string
"Kiss Carnival"
----------------stringifiedBln-------------------
string
false
----------------stringifiedArr-------------------
string
[2003,2017]
----------------stringifiedObj-------------------
string
{"drama":"PET","season":2017,"casting":["koyuki","matsumoto jun"],"character":["sumire","momo"]}
{"drama":"PET","season":2017}
{
    "drama":"PET",
    "season":2017,
    "casting": [
    "koyuki",
    "matsumoto jun"
    ],
    "character": [
    "sumire",
    "momo"
    ]
}
{
    "drama" : "PET",
    "season" : 2003,
    "casting" : [
    "koyuki",
    "matsumoto jun"
    ],
    "character": [
    "sumire",
    "momo"
    ]
}
*/
