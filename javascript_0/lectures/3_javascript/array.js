'use strict';

// 1) 배열 생성
// const fruits = ['사과', '딸기', '바나나'];
// const fruits = new Array('사과', '딸기', '바나나');
// console.log('과일: ', fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 2) 자주 사용하는 배열 API
// length
// console.log('과일 개수: ', fruits.length);
// console.log('마지막 과일: ', fruits[fruits.length - 1]);

// push()
// fruits.push('귤');
// console.log(fruits);

// forEach()
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// pop()
// fruits.pop();
// let removeItem = fruits.pop;
// console.log('removeItem: ', removeItem);
// console.log('제거완료: ', fruits);

// shift()
// fruits.shift();
// fruits.shift();
// console.log(fruits);

// unshift()
// fruits.unshift('수박');
// console.log(fruits);

// indexOf()
// const index = fruits.indexOf('귤');
// console.log('index: ', index);

// splice()
// fruits.splice(1, 2); // 1번째에 있는 것부터 2번 없앤다
// console.log(fruits);

// 3) 구조 분해 할당
// let fruits = ['사과', '딸기', '바나나'];
// let [apple, banana, strawberry, ...others] = [
//   '사과',
//   '딸기',
//   '바나나',
//   'a',
//   'b',
// ];
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

// 4) 전개 구문
// let fruits = ['사과', '딸기', '바나나'];
// let items = ['abc', ...fruits, 'def'];
// console.log('items: ', items);

// 5) Rest parameter
// print('a', 'b', 'c')
// function print(...values) {}

// 얕은 복사
// let fruits = ['사과', '딸기', '바나나'];
// let target = fruits;
// target[0] = '파인애플';
// console.log('과일: ', fruits);
// console.log('타깃: ', target);

// 깊은 복사
let fruits = ['사과', '딸기', '바나나'];
let target = [...fruits];
// let target = Array.from(fruirs)
// let target = fruirs.slice()

target[0] = '파인애플';
console.log('과일: ', fruits);
console.log('타깃: ', target);
