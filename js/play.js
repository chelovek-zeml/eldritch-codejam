import blueCardsAssets from '../data/mythicCards/blue/index.js';
import brownCardsAssets from '../data/mythicCards/brown/index.js';
import greenCardsAssets from '../data/mythicCards/green/index.js';

console.log(blueCardsAssets[0].color);
console.log(brownCardsAssets[0].color);
console.log(greenCardsAssets[0].color);

const cardActive = document.querySelectorAll('.ancient-card');
const difficulty = document.querySelectorAll('.difficulty');
const shuffleButton = document.querySelector('.shuffle-button');
const deck = document.querySelector('.deck');
const dot = document.querySelectorAll('.dot');
const arr = [
  [1, 1, 2, 2, 1, 3, 2, 0, 4],
  [0, 2, 2, 1, 0, 3, 3, 0, 4],
  [0, 1, 2, 2, 1, 3, 3, 0, 4],
  [1, 1, 2, 3, 1, 2, 2, 0, 4],
];
let flagAncients = null;

for (let i = 0; i < cardActive.length; i++) {
  cardActive[i].addEventListener('click', addCardActive);
  function addCardActive() {
    cardActive[i].classList.add('active');
    for (let i = 0; i < dot.length; i++) {
        dot[i].textContent = 0;
      }
    flagAncients = i;
    for (let j = 0; j < cardActive.length; j++) {
      if (i !== j) {
        cardActive[j].classList.remove('active');
      }
    }
    deck.classList.add('no_active');
    for (let k = 0; k < difficulty.length; k++) {
      difficulty[k].classList.remove('active');
    }
  }
}

for (let i = 0; i < difficulty.length; i++) {
  difficulty[i].addEventListener('click', addDifficultyActive);

  function addDifficultyActive() {
    difficulty[i].classList.add('active');
    for (let j = 0; j < difficulty.length; j++) {
      if (i !== j) {
        difficulty[j].classList.remove('active');
      }
    }
    shuffleButton.classList.remove('no_active');
    deck.classList.add('no_active');
  }
}

shuffleButton.addEventListener('click', function () {
  shuffleButton.classList.add('no_active');
  deck.classList.remove('no_active');
});

shuffleButton.addEventListener('click', showDiagram);
console.log(dot[5]);

function showDiagram() {
    console.log(flagAncients);
  for (let i = 0; i < dot.length; i++) {
    dot[i].textContent = arr[flagAncients][i];
  }
}
