// 배열 인덱스로 특정 요소 수정하기 ( splice )

// 배열.splice(시작 인덱스, 삭제할 요소의 개수, 추가될 요소들 ...)

/*
첫 번째 인자인 시작 인덱스는 배열 요소가 변경될 시작 지점이다. splice는 특정 위치의 요소를 지정하는 것이 필수이므로 반드시 첫 번째 인자값은 배열 길이보다 작아야 유효하다.
두 번째 인자인 삭제할 요소의 개수는 시작 인덱스의 위치부터 삭제하고자 하는 개수만큼 요소를 제거한다. 이때 해당 요소가 제거됨과 동시에 메소드 호출 결과로 값을 반환한다.
세 번째 인자에 추가될 요소들을 지정하면, 시작 인덱스부터 해당 요소들이 추가된다.
*/

const fruits = ["melon", "lemon", "source", "apple", "juice"];

fruits.splice(4, 1);
fruits.splice(4, 0, "grape");
fruits.splice(2, 1, "mandarin", "strawberry", "watermelon");
console.log(fruits);

/* 결과
[ 'melon',
'lemon',
'mandarin',
'strawberry',
'watermelon',
'apple',
'grape' ]
*/
