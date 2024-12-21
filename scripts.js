// Задание 1.4
// No.1 Выведите в консоль все целые числа от 1 до 100.
// const allNumbers = () => {
//     let i = 1;
//     while (i <= 100) {
//         console.log(i);
//         i = i + 1;
//     }
//     console.log('All numbers from 1 to 100')
// }
// allNumbers();

//No.2 Выведите в консоль все целые числа от -100 до 0.
// const allNumbers = () => {
//         let i = -100;
//         while (i <= 0) {
//             console.log(i);
//             i = i + 1;
//         }
//         console.log('All numbers from -100 to 0')
//     }
//     allNumbers();

//No.3 Выведите в консоль все целые числа от 100 до 1.
// const allNumbers = () => {
//             let i = 100;
//             while (i >= 1) {
//                 console.log(i);
//                 i = i - 1;
//             }
//             console.log('All numbers from 100 to 1')
//         }
//     allNumbers();

//No.4 Выведите в консоль все четные числа из промежутка от 1 до 100.
// const allEvenNumbers = () => {
//             let i = 1;
//             while (i <= 100) {
//                 if(i % 2 === 0){
//                 console.log(i);
//                 } 
//                 i = i + 1;
//             }
//             console.log('All even numbers from 1 to 100')
//         }
//         allEvenNumbers();

//No.5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const allNumbers = () => {
            let i = 1;
            while (i <= 100) {
                if(i % 3 === 0){
                console.log(i);
                } 
                i = i + 1;
            }
            console.log('Все числа в промежутке делящиеся на 3')
        }
        allNumbers();





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