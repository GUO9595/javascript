'use strict';

// 1) 숫자
let number = 2;
const number2 = 1.2;
console.log(number2);
// 자바스크립트는 숫자 타입 선언이 단순하다는 장점이 있음

// console.log(5 / 0); => Infinity
// console.log(-5 / 0); => -Infinity
// console.log('hello' / 0); => NaN

let nan = 'hello' / 0;
console.log(nan); // NaN
console.log(typeof nan); // number

// 2) 문자
const name = '홍길동';
const name1 = '홍길동';
const name2 = '홍길동';
const age = 22;

console.log(
  '안녕하세요 제 이름은 ' + name + ' 입니다. 나이는 ' + age + '살 이에요.'
);
console.log('-------------------------');
console.log('안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살 이에요.');

// 3) 불리안
const tr = true;
const fa = false;

// 4) null, undefined
const username = null;
let message = null;
console.log('username: ', username);
console.log('message: ', message);
