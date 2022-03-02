var x = 5;
var y = "five";
var isTrue = true;
var empty = null;
var nothing; // undefined
var sym = Symbol("me"); // Symbol

var item = {
  price: 5000,
  count: 10,
}; // 객체(Object)
var fruits = ["apple", "orange", "kiwi"]; // 배열(Array)
var addFruit = function (fruit) {
  fruits.push(fruit);
}; // 함수(function)
addFruit("watermelon");
console.log(fruits);
