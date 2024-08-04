'use strict';

let number = 10;
if (number > 0) {
  console.log('참입니다.');
} else {
  console.log('거짓입니다.');
}
let score = prompt('수학 점수를 입력해주세요.');
console.log('score: ', score);

// 90 이상 A
// 80 이상 B
// 70 이상 C
// 60 이상 D
// 그 외 F

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}
