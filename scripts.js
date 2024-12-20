// Задание 1.2
// No.1 Дано число. Выведите в консоль первую цифру этого числа.
const figure = (number) => {
    console.log(`First number: ${number.toString()[0]}`);
}
figure(384);

//No.2 Дано число. Выведите в консоль последнюю цифру этого числа.
// const figure = (number) => {
//     console.log(`Last number: ${number % 10}`);
//     }
//     figure(4643);

// //No.3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const sumOfNumbers = (number) => {
//     let figure = number.toString();
//     let first = parseInt(figure[0]); 
//     let last = parseInt(figure[figure.length - 1]);

// console.log(`Our sum: ${first + last}`); 
// }
// sumOfNumbers(57899);

//No.4 Дано число. Выведите количество цифр в этом числе.
// const count = (number) => {
//    let figure = number.toString().length;
//    console.log(`Count of numbers: ${figure}`);
// }
// count(567386789);

//No.5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const sameNumbers = (number1, number2) => {
//     console.log(number1, number2);
//     let first = number1.toString();
//     let second = number2.toString();
//     if(first[0] === second[0]) {
//         console.log('First numbers are the same');
//     } else {
//         console.log('No, first numbers are differnet')
//     }

// }
// sameNumbers(544, 58);


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