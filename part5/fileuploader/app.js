const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const UPLOAD_PATH = "uploads/";
const storage = multer.diskStorage({
  // 파일이 저장될 폴더
  destination: (req, file, cb) => cb(null, UPLOAD_PATH),
  // 저장될 파일 이름
  filename: (req, file, cb) =>
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    ),
});
const upload = multer({ storage });

const app = express();

// 미들웨어 함수를 추가하기 위해 app.use를 사용한다.
// 에러를 처리하는 미들웨어이다. 에러 처리 미들웨어 함수를 정의할 때는 4개의 매개변수가 필요하다.
// app.use(function(에러, 요청 객체, 응답 객체, next 함수) { 에러와 관련된 콜백 함수 내용 });
app.use((err, req, res, next) => {
  res.status(500).send("파일 업로드에 실패했습니다.");
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/upload", cors(), upload.single("file"), (req, res, next) => {
  if (!req.file) return next(400);
  res.status(200).send("파일을 정상적으로 업로드했습니다.");
});

app.get("/file_list", cors(), (req, res, next) => {
  fs.readdir(path.join(__dirname, UPLOAD_PATH), (err, files) => {
    if (err) return next(err);
    res.status(200).send(files);
  });
});

app.listen(3000);
/**
 * app.listen() 메소드는 http.Server 객체를 반환한다. 이때 지정된 호스트 : 포트를 연결을 바인딩하고, 이 주소로 수신할 수 있도록 서버를 대기 상태로 만든다.
 * 포트 번호는 3000로 설정한다. 따라서 로컬 컴퓨터에서 서버를 실행하고 http://localhost:3000 주소로 호출하면 된다.
 */
