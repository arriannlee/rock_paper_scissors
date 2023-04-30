const playRock = document.querySelector('#rock')
const playPaper = document.querySelector('#paper')
const playScissors = document.querySelector('#scissors')

// Rock Paper Scissors Game

let score = 0;

function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return 'rock';
  } else if (random < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function checkWin(playerChoice) {
  let botChoice = rockPaperScissors();
  console.log(`You chose ${playerChoice}, bot chose ${botChoice}`);
  if ((playerChoice === 'rock' && botChoice === 'scissors') ||
      (playerChoice === 'paper' && botChoice === 'rock') ||
      (playerChoice === 'scissors' && botChoice === 'paper')) {
    console.log('You win!');
    return 'WIN';
  } else if (playerChoice === botChoice) {
    console.log('It\'s a draw.');
    return 'DRAW';
  } else {
    console.log('You lose!');
    return 'LOSE';
  }
}

function playGameXTimes(choices) {
  let playerScore = 0;
  let botScore = 0;

  for (let i = 1; i <= 3; i++) {
    let result = checkWin(choices[i - 1]);

    if (result === 'WIN') {
      playerScore++;
    } else if (result === 'LOSE') {
      botScore++;
    }
  }

  if (playerScore > botScore) {
    console.log(`Congratulations, you won ${playerScore}-${botScore}!`);
  } else if (playerScore < botScore) {
    console.log(`Sorry, you lost ${playerScore}-${botScore}.`);
  } else {
    console.log(`It's a tie ${playerScore}-${botScore}.`);
  }

  score = updateScore(score, playerScore);
}

function updateScore(currentScore, roundScore) {
  if (roundScore > 0) {
    currentScore++;
  }
  console.log(`Your score: ${currentScore}`);
  return currentScore;
}

playGameXTimes(['rock', 'paper', 'scissors']);


#0CFF07   #047FFF