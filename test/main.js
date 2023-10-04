const boxEl = document.querySelector('.box');

if(boxEl.classList.contains('active')){
  console.log('포함됨!');
} else {
  console.log('포함 안 됨!');
};

const time = new Date().getHours();
time > 0 && time < 12 ? console.log("오전입니다.") : console.log("오후입니다.")

for(let i=0 ; i<=1000 ; i++) {
  if (i % 2 == 1 && i % 13 == 0){
    console.log(i)
  }
}

// 구구단 출력하기
// let i = 2;
// let j = 1;

// while (i < 10) {
//   while (j < 10) {
//   console.log(`${i} x ${j} = ${i*j}`)
//   j++
//   }
//   console.log(`${i+1}단 시작!`)
//   i++
//   j = 1
// }

let n

for ( n = 0 ; n<100 ; n++) {
  if (n % 2 == 0 || n % 3 == 0 ){
    n += n
  }
}

console.log(n)

let fruits = ['사과', '바나나', '수박', '포도']

fruits.forEach(function (number, index, array) {
  console.log(number, index, array)
})