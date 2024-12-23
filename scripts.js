// Задание 1.8
//No.1 Заполните массив целыми числами от 1 до 10.
// const mass = [];
// for (let i = 1; i <= 10; i++) {
//     mass.push(i);
// }
// console.log(mass); // Выводит массив [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//No.2 Заполните массив четными числами из промежутка от 1 до 100.
// const mass = [];
// for (let i = 1; i <= 100; i++) {
//    if(i % 2 === 0) {
//     mass.push(i);
//    }
// }
// console.log(mass); // Выводит большой массив из четных чисел

//No.3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.
const mass = [1.456, 2.125, 3.32, 4.1, 5.34];
const otherMassive = mass.reduce((res, num) => {
    res.push(Math.round(num * 10) / 10);
    return res;
    }, []);

console.log(otherMassive); // Выводит: [ 1.5, 2.1, 3.3, 4.1, 5.3 ]



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