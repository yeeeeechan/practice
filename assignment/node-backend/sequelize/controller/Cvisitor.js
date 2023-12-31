const { User } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

exports.main = (req, res) => {
  res.render("main");
};

// db에서 select로 조회하고, 조회된 정보 응답으로 보내기
exports.search = (req, res) => {
  const data = {
    userid: req.body.id,
    name: req.body.name,
    pw: req.body.pw,
  };

  User.findAll({
    where: {
      userid: data.userid,
      name: data.name,
      pw: data.pw,
    },
  }).then((result) => {
    res.send(result);
  });
};

// db에 insert
exports.join = (req, res) => {
  const data = {
    userid: req.body.id,
    name: req.body.name,
    pw: req.body.pw,
  };

  User.create(data)
    .then((result) => {
      console.log("create result: ", result);
      res.send(result);
    })
    .catch((err) => {
      console.log("err 발생:", err);
      res.status(400).send("오류 발생");
    });
};

// db에서 조회한 결과 응답으로 보내기
exports.login = (req, res) => {
  User.findAll({
    where: {
      userid: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findAll result: ", result);
    res.send(result);
  });
};

exports.edit = (req, res) => {
  const data = {
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  };
  User.update(data, {
    where: {
      id: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("업데이트 결과", result);
    res.send({ result: true });
  });
};
