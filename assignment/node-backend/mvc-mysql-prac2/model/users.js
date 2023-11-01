const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "12345dpcks!",
  database: "prac_db",
});

exports.addVisitor = (data, cb) => {
  const sql = `insert into visitor (userid, contents) values (${data.userid}, ${data.contents})`;
  connect.query(sql, (err, insertResult) => {
    if (err) {
      throw err;
    }
    console.log("visitor 추가된 데이터 확인", insertResult);
    cb(insertResult.insertId);
  });
};
