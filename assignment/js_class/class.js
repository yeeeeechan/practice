function User(first, last) {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
} // 클래스 안에 메소드를 만드는 것과 prototype을 사용하는 것에 차이가 있나?

const heropy = new User('Hero', 'Park')

console.log(heropy.getFullName())