const body = document.body;
const cardArea = document.createElement('div');
const cards = document.querySelectorAll('.card-area');

let level = 3;
document.querySelectorAll('.level__choice-item').forEach(item => item.addEventListener('click', levelChoice));


function levelChoice (event) {
  level = +event.target.getAttribute('data-level');
  document.querySelector('.button-one').classList.remove('active');
  document.querySelector('.button-two').classList.remove('active');
  document.querySelector('.button-three').classList.remove('active');
  event.target.classList.add('active');
}

const buttonStart = document.getElementById('start');
buttonStart.addEventListener('click', start);

function start() {
  document.body.innerHTML = '';
  document.body.append(cardArea);
  cardArea.classList.add('card-area');
  if (level === 3) {
    cardArea.classList.add('card-area-three');
  } else if (level === 6) {
    cardArea.classList.add('card-area-six');
  } else if (level === 9) {
    cardArea.classList.add('card-area-nine');
  }
  for (let i = 0; i < level; i++) {
    createCard();
  }
}

function createCard() {
  const card = document.createElement('div');
  card.innerHTML = `<div class='flip-card'>
  <div class='flip-card-inner'>
    <div class='flip-card-front'>
      <img src='images/t-shirt.png' alt='card'> 
    </div>
    <div class='flip-card-back'>
      <img src='images/game-over.png' alt='game-over' class = 'image'>
    </div>
  </div>
</div>`;
  cardArea.append(card);
  card.addEventListener('click', rotateCard);
}

let gameOver = false;

function rotateCard(event) {
  if (!gameOver) {
    const random = Math.floor(Math.random() * level);
    document.querySelectorAll('.image')[random].src = 'images/bug.png';
    event.target.parentElement.parentElement.classList.add('rotate');
    gameOver = true;
  } else {
    setTimeout(() => window.location.reload(), 300);
  }
}

