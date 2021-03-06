const body = document.body;

let level = null;
document.querySelectorAll('.level__choice-item').forEach(item => item.addEventListener('click', levelChoice));
function levelChoice (event) {
  level = +event.target.getAttribute('data-level');
  document.querySelector('.button-one').classList.remove('active');
  document.querySelector('.button-two').classList.remove('active');
  document.querySelector('.button-three').classList.remove('active');
  event.target.classList.add('active');
};
const buttonStart = document.getElementById('start');
/* const buttonStartNoChoice = () => alert('Ошибка! Вы не выбрали уровень!');
 buttonStart.addEventListener('click', buttonStartNoChoice); */

const threeCardsTable = document.createElement('div');
threeCardsTable.className = 'table-three';
const sixCardsTable = document.createElement('div');
sixCardsTable.className = 'table-six';
const nineCardsTable = document.createElement('div');
nineCardsTable.className = 'table-nine'; 
// const buttonStartChoice = () => 

