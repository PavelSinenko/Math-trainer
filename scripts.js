// Задание 1.9
//No.1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// const mass = ['http://facebook', 'http://instagram', 'youtube'];
// let res = mass.filter(elem => {
//         return elem.startsWith('http://');
//     });
// console.log(res); // Выводит [ 'http://facebook', 'http://instagram' ]

//No.2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// const mass = ['http://facebook', 'project.html', 'youtube', 'window.html'];
// let res = mass.filter(elem => {
//         return elem.endsWith('.html');
//     });
// console.log(res); // Выводит [ 'project.html', 'window.html' ]

//No.3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
const mass = [10, 20, 30, 100]
let answer = mass.map((x) => x + (x * 0.1));
console.log(answer); // Ответ [ 11, 22, 33, 110 ]


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