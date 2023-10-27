const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, file.originalname + "_" + Date.now() + ext);
    },
  }),
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", uploadDetail.single("profile"), function (req, res) {
  if (!req.file) {
    // Handle error
  }
  res.render("sucess", {
    src: req.file.path,
    id: req.body.id,
  });
});

app.post(
  "/upload-dynamic",
  uploadDetail.single("profile"),
  function (req, res) {
    res.send({
      ...req.body,
      src: req.file.path,
    });
    console.log(req.body);
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
