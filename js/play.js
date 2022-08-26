import blueCardsAssets from '../data/mythicCards/blue/index.js';
import brownCardsAssets from '../data/mythicCards/brown/index.js';
import greenCardsAssets from '../data/mythicCards/green/index.js';

const cardActive = document.querySelectorAll('.ancient-card');
const difficulty = document.querySelectorAll('.difficulty');
const shuffleButton = document.querySelector('.shuffle-button');
const deck = document.querySelector('.deck');
const dot = document.querySelectorAll('.dot');
const lastCard = document.querySelector('.last-card');
const arr = [
  [1, 2, 1, 2, 3, 1, 2, 4, 0],
  [0, 2, 2, 1, 3, 0, 3, 4, 0],
  [0, 2, 1, 2, 3, 1, 3, 4, 0],
  [1, 2, 1, 3, 2, 1, 2, 4, 0],
];
let flagAncients = null;
let numCard = 0;
let arrayCard;

for (let i = 0; i < cardActive.length; i++) {
  cardActive[i].addEventListener('click', addCardActive);
  function addCardActive() {
    lastCard.classList.add('no_active');
    cardActive[i].classList.add('active');
    for (let n = 0; n < dot.length; n++) {
      dot[n].textContent = 0;
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

    arrayCard = collectionCard();
    arrayCard = mixCard();
    arrayCard = mixArray();
    console.log(arrayCard);
  }
}

for (let i = 0; i < difficulty.length; i++) {
  difficulty[i].addEventListener('click', addDifficultyActive);

  function addDifficultyActive() {
    difficulty[i].classList.add('active');
    lastCard.classList.add('no_active');
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
  numCard = 0;
});

shuffleButton.addEventListener('click', showDiagram);

function showDiagram() {
  for (let i = 0; i < dot.length; i++) {
    dot[i].textContent = arr[flagAncients][i];
  }
}
deck.addEventListener('click', showDinamicDiagram);

function showDinamicDiagram() {
  if (arrayCard[numCard].color === 'blue') {
    if (parseInt(dot[0].textContent) > 0) {
      let n = parseInt(dot[0].textContent);
      n--;
      dot[0].textContent = n;
    } else if (parseInt(dot[3].textContent) > 0) {
      let n = parseInt(dot[3].textContent);
      n--;
      dot[3].textContent = n;
    } else {
      let n = parseInt(dot[6].textContent);
      n--;
      dot[6].textContent = n;
    }
  } else if (arrayCard[numCard].color === 'brown') {
    if (parseInt(dot[1].textContent) > 0) {
      let n = parseInt(dot[1].textContent);
      n--;
      dot[1].textContent = n;
    } else if (parseInt(dot[4].textContent) > 0) {
      let n = parseInt(dot[4].textContent);
      n--;
      dot[4].textContent = n;
    } else {
      let n = parseInt(dot[7].textContent);
      n--;
      dot[7].textContent = n;
    }
  } else if (arrayCard[numCard].color === 'green') {
    if (parseInt(dot[2].textContent) > 0) {
      let n = parseInt(dot[2].textContent);
      n--;
      dot[2].textContent = n;
    } else if (parseInt(dot[5].textContent) > 0) {
      let n = parseInt(dot[5].textContent);
      n--;
      dot[5].textContent = n;
    } else {
      let n = parseInt(dot[8].textContent);
      n--;
      dot[8].textContent = n;
    }
  }
}

deck.addEventListener('click', getCardNext);

function showCard() {
  if (numCard < arrayCard.length) {
    lastCard.classList.remove('no_active');
    lastCard.style.backgroundImage = `url(${arrayCard[numCard].cardFace.src})`;
  } else {
    deck.classList.add('no_active');
    lastCard.classList.add('no_active');
  }
}

function getCardNext() {
  showCard();
  numCard++;
}

function collectionCard() {
  var arrTemp1 = [];
  let arrTemp2 = blueCardsAssets.slice();
  let arrTemp3 = brownCardsAssets.slice();
  let arrTemp4 = greenCardsAssets.slice();
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  for (let i = 0; i < arr[flagAncients].length; i++) {
    if (i === 0 || (i + 3) % 3 === 0) {
      count1 = count1 + arr[flagAncients][i];
    }
    if (i === 1 || (i + 2) % 3 === 0) {
      count2 = count2 + arr[flagAncients][i];
    }
    if (i === 2 || (i + 1) % 3 === 0) {
      count3 = count3 + arr[flagAncients][i];
    }
  }
  arrTemp1 = nwArray(arrTemp2, count1)
    .concat(nwArray(arrTemp3, count2))
    .concat(nwArray(arrTemp4, count3));
  return arrTemp1;
}

function randomNum(num) {
  return Math.round(Math.random() * num);
}

function nwArray(array, n) {
  while (!(array.length === n)) {
    array.splice(randomNum(array.length), 1);
  }
  return array;
}

function mixCard() {
  let tempAr1 = [];
  let tempAr2 = [];
  let tempAr3 = [];
  let tempAr4 = [];
  let nTemp = 0;
  let mTemp = 0;
  let pTemp = 0;
  let tempAncients = arr[flagAncients].slice();
  for (let i = 0; i < arrayCard.length; i++) {
    if (arrayCard[i].color === 'blue') {
      tempAr1.push(arrayCard[i]);
    }
    if (arrayCard[i].color === 'brown') {
      tempAr2.push(arrayCard[i]);
    }
    if (arrayCard[i].color === 'green') {
      tempAr3.push(arrayCard[i]);
    }
  }
  tempAr1 = randomArray(tempAr1);
  tempAr2 = randomArray(tempAr2);
  tempAr3 = randomArray(tempAr3);

  for (let j = 0; j < tempAncients.length; j++) {
    if (j === 0 || (j + 3) % 3 === 0) {
      while (tempAncients[j] > 0) {
        tempAr4.push(tempAr1[nTemp]);
        nTemp++;
        tempAncients[j]--;
        console.log(tempAr4)
      }
    }
    if (j === 1 || (j + 2) % 3 === 0) {
      while (tempAncients[j] > 0) {
        tempAr4.push(tempAr2[mTemp]);
        mTemp++;
        tempAncients[j]--;
      }
    }
    if (j === 2 || (j + 1) % 3 === 0) {
      while (tempAncients[j] > 0) {
        tempAr4.push(tempAr3[pTemp]);
        pTemp++;
        tempAncients[j]--;
      }
    }
  }
  return tempAr4;
}

function mixArray() {
  let tempMixArray1 = [];
  let tempMixArray2 = [];
  let tempMixArray3 = [];
  let tempMixArray4 = [];
  let n1 = arr[flagAncients][0] + arr[flagAncients][1] + arr[flagAncients][2];
  let n2 = arr[flagAncients][3] + arr[flagAncients][4] + arr[flagAncients][5];

  for (let i = 0; i < arrayCard.length; i++) {
    if (i < n1) {
      tempMixArray1.push(arrayCard[i]);
    } else if (i <= n1 + n2 && i > n1) {
      tempMixArray2.push(arrayCard[i]);
    } else {
      tempMixArray3.push(arrayCard[i]);
    }
  }
  console.log(tempMixArray1)
  console.log(tempMixArray2)
  console.log(tempMixArray3)

  tempMixArray4 = randomArray(tempMixArray1)
    .concat(randomArray(tempMixArray2))
    .concat(randomArray(tempMixArray3));
  return tempMixArray4;
}

function randomArray(arr) {
  let n = randomNum(10);

  for (let i = 0; i < n; i++) {
    let k = randomNum(arr.length - 1);
    let m = randomNum(arr.length - 1);
    let temp = arr[k];
    arr[k] = arr[m];
    arr[m] = temp;
  }
  return arr;
}
