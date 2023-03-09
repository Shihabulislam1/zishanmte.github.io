'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no value
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number😒';
    displayMessage('No Number😒');
  }
  //When Player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number ';
    displayMessage('🎉Correct Number ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Too High' : '📉Too Low ';
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low ');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     'Loser!!😂You Lost the Game😂😂';
      displayMessage('Loser!!😂You Lost the Game😂😂');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
