const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerBot = document.querySelector('.playerBot');
const winner = document.querySelector('#winner');
const question = document.querySelector('#question')
const playerButtons = document.querySelector('#playerButtons')

const images = {
  rock: 'img/rock.png',
  paper: 'img/paper.png',
  scissors: 'img/scissors.png'
};


let score = 0;

rock.addEventListener('click', () => {
  displayBotChoice('rock');
  rock.style.display = 'none';
  paper.style.display = 'none';
  scissors.style.display = 'none';
  question.style.display = 'none';
})

paper.addEventListener('click', () => {
  displayBotChoice('paper');
  rock.style.display = 'none';
  paper.style.display = 'none';
  scissors.style.display = 'none';
  question.style.display = 'none';

})

scissors.addEventListener('click', () => {
  displayBotChoice('scissors');
  paper.style.display = 'none';
  rock.style.display = 'none';
  scissors.style.display = 'none';  
  question.style.display = 'none';

})

function displayBotChoice(choice) {
  const botChoice = rockPaperScissors();
  console.log(`You chose ${choice}, bot chose ${botChoice}`);

  const container = document.createElement('div'); 
  container.classList.add('choices'); 

  const playerImageSrc = images[choice];
  const playerImageElement = createElement('img', { src: playerImageSrc });
  container.appendChild(playerImageElement);

  const botImageSrc = images[botChoice];
  const botImageElement = createElement('img', { src: botImageSrc });
  container.appendChild(botImageElement);

  playerBot.appendChild(container);


  if ((choice === 'rock' && botChoice === 'scissors') ||
      (choice === 'paper' && botChoice === 'rock') ||
      (choice === 'scissors' && botChoice === 'paper')) {
    console.log('You win!');
    winner.textContent = 'Win';
  } else if (choice === botChoice) {
    console.log('It\'s a draw.');
    winner.textContent = 'Draw';
  } else {
    console.log('You lose!');
    winner.textContent = 'Lose';
  }
  playerButtons.style.display = 'none';
  resetButton.style.display = 'block';
}

function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function rockPaperScissors() {
  const random = Math.random();
  if (random < 0.33) {
    return 'rock';
  } else if (random < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame)
  function resetGame() {
    winner.textContent = '';
    playerBot.innerHTML = '';
    playerButtons.style.display = 'flex'
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    question.style.display = 'block';
    resetButton.style.display = 'none';
  }
resetGame()




















const button = document.querySelector('#rules');
const popup = document.createElement('div');
popup.classList.add('popup');
popup.innerHTML = `<img src="img/rules.png">`;
document.body.appendChild(popup);

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

button.addEventListener('click', () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

popup.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});







