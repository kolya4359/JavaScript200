// 객체에 속성 추가 못하게 만들기 (seal)

/*
Object 객체의 메소드 seal 은 객체를 밀봉한다. 단단히 봉인된 객체이므로 속성을 추가/삭제 할 수 없다.
단, 기존 속성에 대해서는 변경 가능하다.
'use strict'가 선언된 스코프에서 객체 속성을 추가/삭제하면 에러가 발생한다. 반대로 선언되지 않은 스코프에서는 에러가 발생되지 않으나,
정상적으로 처리되지 않는다.
*/

const album = {
  name: "LOVE YOURSELF",
};

album.song = "Euphoria";
album.singer = "RM";

console.log(album);

Object.seal(album);

album.comment = "Answer";
album.singer = "JK";
delete album.name;

console.log(album);

/* 결과
{name: 'LOVE YOURSELF', song: 'Euphoria', singer: 'RM'}
{name: 'LOVE YOURSELF', song: 'Euphoria', singer: 'JK'}
*/
