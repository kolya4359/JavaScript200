"use strict";

const express = require("express");
const services = require("../services");
const createError = require("http-errors");

const router = express.Router();

router.route("/list").get(getList);

router.route("/").post(makeGame);

router.route("/:id").get(getGame).delete(deleteGame);

router.route("/:id/guess").post(postGuess);

const checkError = (err) => {
  return err.code ? err : createError(500, err);
};

// async로 비동기 작업을 제어하기 때문에 try-catch 예외 처리 구문을 함께 작성.
async function getList(req, res, next) {
  try {
    res.send(services.getGames());
  } catch (err) {
    next(checkError(err));
  }
}

async function makeGame(req, res, next) {
  const digit = req.body.digit;

  try {
    const id = services.makeGame(digit);
    res.send({ id });
  } catch (err) {
    next(checkError(err));
  }
}

async function getGame(req, res, next) {
  const id = req.params.id;

  try {
    res.send(services.getGame(id));
  } catch (err) {
    next(checkError(err));
  }
}

async function postGuess(req, res, next) {
  const guess = req.body.guess ? req.body.guess.split("").map((g) => +g) : [];
  const id = req.params.id;

  try {
    res.send(services.guessAnswer(id, guess));
  } catch (err) {
    next(checkError(err));
  }
}

async function deleteGame(req, res, next) {
  const id = req.params.id;

  try {
    res.send(services.removeGame(id));
  } catch (err) {
    next(checkError(err));
  }
}

module.exports = router;

/**
 * router.route() 를 사용하여 단일 경로와 HTTP 메소드, 관련 핸들러를 지정.
 *
 * router.route(경로)
 * .all(function(req, res, next)) { 모든 HTTP 메소드에서 실행}
 * .get(function(req, res, next)) { HTTP GET 메소드에서 실행}
 * .post(function(req, res, next)) { HTTP POST 메소드에서 실행}
 * .put(function(req, res, next)) { HTTP PUT 메소드에서 실행}
 * .delete(function(req, res, next)) { DELETE GET 메소드에서 실행}
 */
