// 폴더 생성하기

/**
 * Node.js에서 fs 모듈은 파일 입출력과 관련된 파일 시스템 모듈로, 서버의 정적 파일을 다루는데 가장 많이 사용되는 모듈이다.
 */

"use strict";

const fs = require("fs");

const checkDir = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if (err && err.code === "ENOENT") return callback(null, true);
    if (err) return callback(err);

    return callback(null, !stats.isDirectory());
  });
};

const currentPath = __dirname;
let path = `${currentPath}/js200`;

checkDir(path, (err, isTrue) => {
  if (err) return console.log(err);

  if (!isTrue) {
    console.log("이미 동일한 디렉토리가 있습니다. 디렉터리명을 변경합니다.");
    path = `${currentPath}/js200-new`;
  }

  fs.mkdir(path, (err) => {
    if (err) console.log(err);

    console.log(`${path} 경로로 디렉터리를 생성했습니다.`);
  });
});

/**
 * __dirname
 * node 명령어로 실행된 파일의 현재 경로 정보를 반환한다. 단, 경로에는 파일 이름은 포함하지 않는다.
 * 파일이 위치한 폴더까지 절대경로(Absolute Path)로 경로값을 반환한다. 여기서 절대경로란 root, 즉 /로 시작하는 경로를 의미한다.
 */
