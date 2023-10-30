'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = guessNumber;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const changeBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};
const changeWidthNumberElement = width => {
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when score is 0 ,game is over
  if (score === 0) {
    displayMessage('You lose. Try again 🙃');
  } else {
    //when its not a number. cause of type input is number
    //it will not get not numbers and it actually works when we don't put nothing
    if (!guess) {
      displayMessage('⛔ Not a number');
    } else if (guess === guessNumber) {
      //when you got the right number, so you win
      debugger;
      displayMessage("🎊 It's Correct");
      changeBackgroundColor('#6ecc68');
      changeWidthNumberElement('30rem');
      document.querySelector('.number').textContent = guessNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== guessNumber) {
      //when guess number is lesser or greater it will return didpends on less or high
      document.querySelector('.score').textContent = --score;
      displayMessage(guess > guessNumber ? '⬆️ Too high' : '⬇️ Too low');
    }
  }
});
//again botton is making reset initial values and states except highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  changeBackgroundColor('#222');
  changeWidthNumberElement('15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
