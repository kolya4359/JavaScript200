// 파일 읽기

"use strict";

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "r", (err, fd) => {
  if (err && err.code === "ENOENT")
    return console.log("읽을 수 없는 파일입니다.");
  if (err) return console.log(err);

  console.log("파일을 정상적으로 읽을 수 있습니다.");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return console.log(err);

    console.log(data);
  });

  /**
   * try-catch 구문이 없다면, 동기 패턴 함수의 예외 처리는 무방비 상태가 된다. 비동기에서 에러를 반환하고 예외 처리했던 것과 달리,
   * 동기 패턴은 짧은 문장으로 값을 반환하지만 에러에 대한 값이 반환되는 것은 아니다. 만일 try-catch 없이 동기 패턴에서 에러가 발생하면,
   * 작업은 그 즉시 중지되고 idle 상태에 빠져 작동되지 않는다.
   */
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
