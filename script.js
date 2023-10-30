'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//document.querySelector('.number').textContent = guessNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when score is 0 ,game is over
  if (score === 0) {
    document.querySelector('.message').textContent = 'You lose. Try again 🙃';
  } else {
    //when its not a number. cause of type input is number
    //it will not get not numbers and it actually works when we don't put nothing
    if (!guess && guess !== 0) {
      document.querySelector('.message').textContent = '⛔ Not a number';
    } else if (guess === guessNumber) {
      //when you got the right number, so you win
      document.querySelector('.message').textContent = "🎊 It's Correct";
      document.querySelector('body').style.backgroundColor = '#6ecc68';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = guessNumber;
    } else if (guess > guessNumber) {
      // when you puted too high number than guess number
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '⬆️ Too high';
      console.log(score);
    } else if (guess < guessNumber) {
      // when it too low
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '⬇️ Too low';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
