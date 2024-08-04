// 문자열 병합
console.log('Hello ' + 'World!');
console.log('3' + 3);
console.log(typeof ('3' + 3));
console.log('3' + 5 + 8);
console.log(3 + 5 + '8');

// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// let number = prompt('숫자를 입력해주세요.');
// if (number % 2 == 1) {
//   alert('홀수');
// } else {
//   alert('짝수');
// }

// let result = x + y;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);

// let a = 10;
// let b = 20;
// console.log(a < b);

// let x = 10;
// let y = 20;
// x += y; // x = x + y
// console.log(x);

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(`${i} 번째 sum=${sum}`);
// }

// let x = true;
// let y = false;
// console.log(x && y); // 모두 참일 때 참
// console.log(x || y); // 둘중 하나만 참이어도 참
// console.log(!x); // 참이면 거짓, 거짓이면 참

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');

btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  console.log('email: ', email);
  console.log('password: ', password);

  if (email === '' || validateEmail(email)) {
    alert('이메일이 유효하지 않습니다');
  } else if (!password) {
    console.log('비밀번호를 입력해주세요');
  } else if ((password.lenth >= 8 && password.lenth <= 16) === false) {
    console.log('비밀번호는 8~16자 이내 입니다.');
  } else {
    console.log('로그인 성공');
  }
});

function validateEmail(email) {
  return true;
}

// let number = 10;
// let message = null;
// if (number % 2 === 1) {
//   message = '홀수'
// } else {
//   message = '짝수'
// }

let number = 10;
let message = number % 2 === 1 ? '홀수' : '짝수';
console.log(message);
