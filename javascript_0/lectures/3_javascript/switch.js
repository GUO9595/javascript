'use strict';

// let subject = 'css';
// switch (subject) {
//   case 'javascript':
//     console.log('hello');
//     let result = 1 + 2;
//     console.log('result', result);
//     break;
//   case 'html':
//     console.log('hello html');
//     break;
//   case 'css':
//     console.log('hello css');
//     break;
//   default:
//     console.log('종료');
// }

// console.log('ㄹㅇ 종료');

let score = prompt('수학 점수를 입력하세요');
let value = Math.floor(score / 10);
console.log(value);

/* 수학 점수
90점 이상 'A'
70점 이상 'A'
50점 이상 'A'
그 외 'D'
*/

switch (value) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
  case 7:
    console.log('B');
    break;
  case 6:
  case 5:
    console.log('C');
    break;
  default:
    console.log('D');
}
