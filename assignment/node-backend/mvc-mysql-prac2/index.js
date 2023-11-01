const express = require("express");
const app = express();
const PORT = 8800;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`Server Open : ${PORT}`);
});
