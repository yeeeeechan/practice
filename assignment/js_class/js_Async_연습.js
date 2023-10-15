// function add(n1, n2) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       let result = n1 + n2;
//       res(result);
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       let result = n * 2;
//       res(result);
//     }, 700);
//   });
// }

// function sub(n) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       let result = n - 1;
//       res(result);
//     }, 500);
//   });
// }

// add(4, 3)
//   .then(function (result) {
//     console.log("add의 결과는", result);
//     return mul(result);
//   })
//   .then(function (result) {
//     console.log("mul의 결과는", result);
//     return sub(result);
//   })
//   .then(function (result) {
//     console.log("sub의 결과는", result);
//   });

function goMart() {
  console.log("마트에 가서 어떤 음료를 살 것인지 고민한다.");
}

function pickDrink() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로 사이다";
      price = 2000;
      res();
    }, 2000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

exec();
