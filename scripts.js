// Задание 1.3
// No.1 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const predLast = (string) => {
//     console.log(string);
//     if (string.length > 1) {
//         console.log(`Предпоследний символ: ${string[string.length - 2]}`);
//     } else {
//         console.log('Только один символ');
//     }
// }
// predLast('Hello world!');

//No.2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const justNumber = (number1, number2) => {
      if (number1 % number2 === 0) {
        console.log('Yeeeah!');
      } else {
        console.log('Oh, nooo!')
      }
}
justNumber(33, 3);







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