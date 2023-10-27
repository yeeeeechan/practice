const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/join", (req, res) => {
  res.send(data);
  console.log("응답으로 보내는 데이터 :", data);
});

app.listen(8080, () => {
  console.log("Sever Open: 8080");
});
