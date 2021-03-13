const body = document.body;
const cardArea = document.createElement('div');
const home = document.getElementById('home');
const cards = document.querySelectorAll('.card-area');

let level = 3;
document.querySelectorAll('.level__choice-item').forEach(item => item.addEventListener('click', levelChoice));

function backHome() {
  body.appendChild(home);
  cardArea.innerHTML = '';
  cardArea.remove();
}

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
  for (let i = 0; i < level; i++) {
    createCard();
  }
}

function createCard() {
  const card = document.createElement('div');
  card.innerHTML = `<div class='flip-card'>
  <div class='flip-card-inner'>
    <div class='flip-card-front'>
      <img src='images/t-shirt.png' alt='card' class = 'image'> 
    </div>
    <div class='flip-card-back'>
      <img src='images/game-over.png' alt='game-over' class = 'image'>
    </div>
  </div>
</div>`;
  cardArea.append(card);
  card.addEventListener('click', rotateCard);
}


function rotateCard(event) {
  const random = Math.floor(Math.random() * level);
  console.log(random);
  event.target.parentElement.parentElement.classList.add('rotate');
}

function turnedOverCard() {
  this.classList.toggle('rotate');
  let allCards = document.querySelectorAll('.card-area');
  allCards.forEach((item) => item.addEventListener('click', backHome));
}

// div.flip-card-inner