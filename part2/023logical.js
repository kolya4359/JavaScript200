// AND 논리 연산자 &&
console.log(true && true); // true
console.log(true && false); // false
console.log("문장" == "문장" && 5 == 5); // true
console.log(5 == 5 && "다른 문장 1" == "다른 문장 2"); // false

// OR 논리 연산자 ||
console.log(true || false); // true
console.log(false || false); // false
console.log("문장" == "문장" || 5 == 10); // true

// NOT 논리 연산자 !
console.log(!true); // false
console.log(!false); // true
console.log(!5); // false
console.log(!"문장"); // false
console.log(!!5); // true
console.log(!!"문장"); // true
