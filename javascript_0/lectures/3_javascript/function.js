'use strict';

// 함수 선언식 <호이스팅 영향 o>
// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 홍길동, 나이: 22살');
// }

// 함수 표현식 <호이스팅 영향 x>
// const sayHello = function (name, age) {
//   console.log('이름과 나이를 출력해주세요');
//   console.log(`이름: ${name}, 나이: ${age}살 `);
// };
// sayHello('이서영', 22);

// function sum(num1 = 0, num2 = 0) {
//   console.log('num1: ', num1);
//   console.log('num2: ', num2);
//   return num1 + num2;
// }
// let result = sum(3, 6);
// console.log('정답: ', result);
// let result2 = sum(5);
// console.log('정답2 ', result2);

// 즉시 실행
// (function () {
//   console.log('hello');
// })();

const hello = (name) => `Hello ${name}`;
const str = hello('이서영');
console.log(str);
// 매개변수가 하나라면 괄호 생략 가능
// 함수 바디가 표현식 하나라면 중괄호와 return문도 생략 가능

let fruits = ['사과', '바나나', '딸기'];
fruits.forEach((item, index) => {
  console.log('item: ', item);
});
