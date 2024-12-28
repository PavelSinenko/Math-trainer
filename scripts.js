// Переменная к которой все обращаются
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

// Вывод примера при обновлении страницы
document.addEventListener('DOMContentLoaded', function() {
    displayResult();
});  


// Проверка ответа пользователя
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('input').value);
    const resultOfAnswer = document.getElementById('result');

    if(isNaN(userAnswer)) {
        resultOfAnswer.textContent = 'Input a number';
        resultOfAnswer.style.color = 'red';
        return;
    }

    stats.total++;
    if(userAnswer === currentMoment.answer) {
        resultOfAnswer.textContent = 'This is right! Well done!';
        resultOfAnswer.style.color = 'green';
        stats.correct++;
    } else {
        resultOfAnswer.textContent = 'This is wrong! Try again';
        resultOfAnswer.style.color = 'red';
    }

    changeStats();
}


// Обновление статистики
function changeStats() {
    document.getElementById('total').textContent = stats.total;
    document.getElementById('correct').textContent = stats.correct;
}

// Переход к следующему примеру
function nextExample() {
    displayResult();
}


