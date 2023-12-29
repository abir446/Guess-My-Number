'use strict';

let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  //Wins The Game
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number Guessed';

    //Changing Background Color
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
  // //Guesses a greater number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //Guesses a lower number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost';

  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
