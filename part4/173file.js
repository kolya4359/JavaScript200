// 파일 삭제하기

/**
 * fs 모듈에서는 파일을 삭제하는 것과 폴더를 삭제하는 방법이 다르다.
 * fs.unlink는 파일 또는 심볼릭 링크를 삭제한다. 그리고 파일을 삭제하기 전에는 반드시 fs.access를 통해 파일에 접근할 수 있는지 확인해야 한다.
 */

"use strict";

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

/**
 * fs.constants.F_OK는 접근과 관련된 mode 정보다. fs.constants는 파일 시스템과 관련된 상수들을 그룹으로 모아놓은 상수인데, 그 안에서
 * F_OK는 파일 존재 여부를 확인할 수 있는 상수이다.
 * 해당 파일이 mode 상수값을 충족하지 않는 경우 콜백 함수에 에러를 전달한다.
 */
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) return console.log("삭제할 수 없는 파일입니다.");

  // err가 없다면 fs.unlink를 통해 filePath 경로 파일을 삭제한다.
  fs.unlink(filePath, (err) =>
    err
      ? console.log(err)
      : console.log(`${filePath}를 정상적으로 삭제했습니다.`)
  );
});

/**
 * fs.constants (파일 시스템 모듈의 상수)
 * fs.constants는 파일 시스템과 관련된 상수들을 모아놓은 큰 범위의 그룹 상수이다. 크게 세 종류로 구분할 수 있는데, 파일 접근(access),
 * 파일 상태(stats), 파일 열기(open)으로 나뉘고, 각각 fs.access(), fs.stats(), fs.open() 함수와 관련되어 있다.
 * 이들은 주로 파일 처리를 위해 접근 권한을 확인하는 용도로 사용한다.
 * 예를 들어, read-only 접근을 위해 파일을 여는 권한으로 X_OK, 파일 쓰기에서 소유권 또는 그룹소유권을 확인하는 S_IWUSR과 S_IXGRP 등이 있다.
 */
