// Задание 1.1 
// No.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const figure = (number) => {
    console.log(number);
    if (number > 0) {
        console.log('Positive number');
    } else if (number < 0) {
        console.log('Negative number');
    } else {
        console.log('This is zero');
    }
}
figure(-35);

// No.2 Дана строка. Выведите в консоль длину этой строки.
//  const text = (string) => {
//      console.log (string.length);
//  }
//  text('Justice and wisdom');

//No.3 Дана строка. Выведите в консоль последний символ строки.
// const text = (string) => {
//     console.log(`Last symbol: ${string[string.length - 1]}`);
// }
// text("Kiwi");

//No.4 Дано число. Проверьте, четное оно или нет.
// const figure = (number) => {
//    console.log(number);
//    if (number % 2 === 0) {
//     console.log('Четное число');
//    } else {
//     console.log('Нечетное число');
//    }
// }
// figure(12);

//No.5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const check = (word1, word2) => {
//     console.log(word1, word2);
//     if(word1[0].toLowerCase() === word2[0].toLowerCase()) {
//         console.log('First letters are the same');
//     } else {
//         console.log('No, first letters are differnet')
//     }

// }
// check('You', 'yougurt');

//No.6 Последний: Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const checkWord = (word) => {
//     console.log(word);
//     if (word[word.length - 1] === 'ь') {
//         console.log('Предпоследняя буква: ' + word[word.length - 2]);
//     } else {
//         console.log('Последняя буква: ' + word[word.length - 1]);
//     }

// }
// checkWord('Камень');




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