// 배열 앞에 요소 추가하기 (unshift)

const festa = ["mang"];
festa.unshift("chimmy");
festa.unshift("tata");
festa.unshift("cooky");
festa.unshift("shooky");
festa.unshift("koya");
festa.unshift("rj");

festa.forEach((name) => {
  console.log(name);
});
/* 결과
rj
koya
shooky
cooky
tata
chimmy
mang
*/
