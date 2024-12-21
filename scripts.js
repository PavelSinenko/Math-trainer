// Задание 1.5
// No.1 Найдите сумму всех целых чисел от 1 до 100.
// const sumOfNumbers = () => {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//        sum = sum + i;
//       }
//       console.log(`${sum} This is sum`); 
// }
// sumOfNumbers();

//No.2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
// const sumOfNumbers = () => {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 0);{
//           sum = sum + i; }
//       }
//       console.log(`${sum} This is sum`); 
// }
// sumOfNumbers();

//No.3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
//    const sumOfNumbers = () => {
//         let sum = 0;
//         for (let i = 1; i <= 100; i++) {
//             if (i % 2 !== 0);{
//              sum = sum + i; }
//           }
//           console.log(`${sum} This is sum`); 
//     }
//     sumOfNumbers();

//No.4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
// const divideNumbers = (number1, number2) => {
//     let differnce = number1 % number2;
//     console.log(differnce)
// }
//    divideNumbers(35, 9);   

//No.5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const ourString = (string) => {
    for (let i = string.length -1; i>= 0; i--) {
        console.log(string[i]);
    }
}
ourString('Hello everyone!')



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