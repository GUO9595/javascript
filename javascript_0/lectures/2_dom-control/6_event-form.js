let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

// inputBox.addEventListener('keypress', function () {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function () {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('event.key', event.key); // 누른 키
//   console.log('event.keyCode', event.keyCode); // 누른 키의 아스키코드
// });

// inputBox.addEventListener('focus', function (event) {
//   alert('focus');
// });

// inputBox.addEventListener('blur', function (event) {
//   alert('blur');
// });

// inputBox.addEventListener('change', function (event) {
//   alert('change');
// });

img.addEventListener('error', function (event) {
  console.log('error');
});
