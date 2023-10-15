// -------------- Callback -> Promise -----------------

// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (msg) {
//       console.log("여기는" + msg);
//     });
//   });
// });

function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    });
  });
}

function back() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res("callback hell");
    }, 1000);
  });
}

// call("kim")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then(function (msg) {
//     console.log("여기는" + msg);
//   });

// ------------------async / await---------------------

async function exec() {
  let name = await call("kim");
  console.log(name, "반가워");
  let txt = await back();
  console.log(txt, "을 실행했구나");
  let msg = await hell();
  console.log("여기는", msg);
}

exec();
