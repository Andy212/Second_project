'use strict';
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let number = 0;

const mainRandomNumber = function(min, max){
    let random = min -0.5 + Math.random() * (max - min +1);
    return Math.round(random);
}

const gameNumber = function(){
    const randomNumber = mainRandomNumber(0, 100);
    console.log('Загаданное число ' + randomNumber); 
    let c = randomNumber;

    const bot = function() {
        number = prompt('Угадай число от 1 до 100');
        console.log(number);
        if(number === null){
            alert('игра окончена');

        }else if (number > c){
            alert('Загаданное число меньше');

            bot();
        }else if(number < c){
            alert('Загаданное число больше');
            bot();
        
        }else if(!isNumber(number)){
            alert('Введи число!');
            bot();

        }else if(+number === c){
            confirm('Поздравляю, Вы угадали!!!');
        }
        
    }
    bot();
}
gameNumber();
