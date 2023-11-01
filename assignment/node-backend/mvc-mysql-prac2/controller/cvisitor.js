const Visitor = require("../model/users");

exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  res.render("visitor");
};

exports.add = (req, res) => {
  Visitor.addVisitor(req.body, (id) => {
    res.send({
      ...req.body,
      id,
    });
  });
};
