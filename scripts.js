// Сделал генерацию примера и его отображение
// Исправил html и css, теперь панель стоит по центру  :)


// Функция к которой все могут обратиться
let currentMoment = {};

let stats = {
    correct: 0,
    total: 0
};


// Здесь генерируем рандомный пример
function generateExample() {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const signs = Math.random() >= 0.5; 
    
    return {
        num1: firstNum,
        num2: secondNum,
        operation: signs ? '-' : '+',
        answer: signs ? firstNum - secondNum : firstNum + secondNum
    };
}    
  

// Отображение примера на экране
function displayResult() {
    currentMoment = generateExample();
    document.getElementById('example').textContent =
      `${currentMoment.num1} ${currentMoment.operation} ${currentMoment.num2} = ?`;
    document.getElementById('input').value = '';
    document.getElementById('result').textContent = '';

}

// Оказывается, чтобы выводился пример, надо добавить event ¯\_(ツ)_/¯
document.addEventListener('DOMContentLoaded', function() {
    displayResult();
});




// Осталось от предыдущих функций, пусть будет
// document.addEventListener('DOMContentLoaded',function(){test()})
// document.addEventListener('keypress', function(ev){
//     if( === 'Enter'){
//         document.getElementById('answer').textContent='33 - 22 = ?';
//     }
// })