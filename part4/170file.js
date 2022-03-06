// 파일 쓰기

/**
 * fs 모듈을 활용할 때 형제처람 같이 활용되는 모듈이 바로 path이다. path 모듈은 파일/폴더 경로와 관련된 모듈이다.
 * 구분자(Delimiter)를 넣어 직접 문자열 경로를 작성할 수도 있지만, 개발하다보면 의도치않은 값이 대입되거나 누락되어 잘못된 경로가 반환 될 수 있다.
 * 이처럼 개발자의 실수를 방지하고, 경로에서 확장자명 또는 파일명만 추출하는 등의 좀더 나은 편의성을 위해 path 모듈을 사용한다.
 */

"use strict";

const fs = require("fs");
const path = require("path");

const makeFile = (path, callback) => {
  // wirteFile = 파일을 새로 생성
  // 첫번째 인자 = 경로, 두번째 인자 = 파일 내용, 세번째 인자 = 인코딩 정보
  fs.writeFile(path, "New file, New content", "utf8", (err) => {
    if (err) return callback(err);

    console.log("파일이 생성됐습니다.");
    callback(null);
  });
};

const appendFile = (path, callback) => {
  // appendFile = 기존 파일에 내용을 추가하는 함수
  fs.appendFile(path, "\nUpdate file", (err) => {
    if (err) return callback(err);

    console.log("파일 내용을 추가합니다.");
    callback(null);
  });
};

const printErrIfExist = (err) => {
  if (err) console.log(err);
};

// 파일 경로를 생성. 현재 파일이 있는 폴더 경로, 파일이 위치한 폴더명, 파일명을 path.join 함수 인자로 넣는다.
// path 모듈의 join 함수는 대입된 매개변수들을 일관된 구분자(delimiter)를 두고 순서대로 하나의 문자열로 합친다.
const filePath = path.join(__dirname, "js200", "hello.txt");

// fs.open 함수는 특정 경로의 파일 또는 폴더의 존재 여부를 확인하기 위해 사용하는데, flag 값을 넣음으로써 파일 접근 권한을 동시에 확인할 수 있다.
// 여기서 대입된 flag는 wx이다.
fs.open(filePath, "wx", (err, fd) => {
  if (err && err.code === "EEXIST")
    return appendFile(filePath, (err) => printErrIfExist(err));
  if (err) return callback(err);

  return makeFile(filePath, (err) => printErrIfExist(err));
});
