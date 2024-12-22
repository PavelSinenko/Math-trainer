// Задание 1.6
//No.1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const numbers = [2, 5, 3];
// const quad = numbers.reduce((sum, num) => sum + num ** 2, 0);
// console.log(quad); 

//No.2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const numbers = [4, 9, 16];
// const answer = numbers.reduce((sum, num) => sum + Math.sqrt(num), 0);
// console.log(answer); 

// //No.3 Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const numbers = [-4, 10, 15, -44];
// const answer = numbers.reduce((sum, num) => {
//     if (num > 0) {
//       sum = sum + num; 
//     }
//     return sum; 
//   }, 0);
// console.log(answer);

//No.4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
const numbers = [-4, 10, 4, 7, 3, 55];
const answer = numbers.reduce((sum, num) => {
    if (num > 0 && num < 10) {
      sum = sum + num; 
    }
    return sum; 
  }, 0);
console.log(answer);


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