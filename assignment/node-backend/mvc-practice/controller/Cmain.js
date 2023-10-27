const Data = require("../model/Info");

exports.main = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  res.send(req.data);
  console.log(req.data);
};

exports.login = (req, res) => {
  const userData = Data.loginInfo();
  let data;
  console.log(userData.id, userData.pw);
  console.log(req.body.userid);
  console.log(req.body.password);
  if (req.body.userid == userData.id && req.body.password == userData.pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!",
    };
  } else {
    data = {
      isSuccess: false,
      msg: "로그인 실패!",
    };
  }
  res.send(data);
};
