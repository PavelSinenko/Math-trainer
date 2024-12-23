// Задание 1.7
//No.1 Дана строка: 'abcde' Получите массив букв этой строки.
// const str = 'abcde';
// const mass = str.split('');
// console.log(mass); // Выводит [ 'a', 'b', 'c', 'd', 'e' ]

//No.2 Дано некоторое число: '12345' Получите массив цифр этого числа.
// const number = 12345;
// const mass = number.toString().split('').map(Number);
// console.log(mass); // Выводит [ 1, 2, 3, 4, 5 ]

//No.3 Дано некоторое число: '12345' Переверните его: '54321'
// const number = 12345;
// const i = number.toString().split('').reverse().join('');
// const reverseNumber = parseInt(i)
// console.log(reverseNumber); // Выводит 54321

//No.4 Дано некоторое число: '12345'  Найдите сумму цифр этого числа.
const number = 12345;
const sumOfDigits = number.toString().split('').map(Number).reduce((sum, num) => sum + num, 0);
console.log(sumOfDigits); // Выводит 15



// Предыдущие функции
// const guessNumber = (string) => {
//     let randomNumber = Math.floor(Math.random() * 5);
//     console.log(randomNumber);
//     if (number === randomNumber) {
//         console.log('Yeeeah!');
//     } else {
//         console.log('Nooo!')
//     }

// }
// guessNumber()


// const answer = (number) => {
// let sum = 2 + 2;
// if (number === sum) {
//     console.log('Right');
// } else {
//     console.log ('Wrong!');
// }
// }

// answer(4)

// function getRandomInt() {
//     let first = Math.floor(Math.random() * 9);
//     let second = Math.floor(Math.random() * 9);
//     let third = Math.floor(Math.random() * 10); 
//     let signs = '';
//     if (third <= 5){
//         signs = '-';
//     } else {
//         signs = '+'
//     }
//     console.log(`${first} ${signs} ${second} = ?`)
//   }
  
//   getRandomInt()



// const test = () => {
//     document.getElementById('answer').textContent='64 + 44 = ?'
// }
// document.addEventListener('DOMContentLoaded',function(){test()})
// document.addEventListener('keypress', function(ev){
//     if( === 'Enter'){
//         document.getElementById('answer').textContent='33 - 22 = ?';
//     }
// })