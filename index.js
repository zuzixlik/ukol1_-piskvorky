'Use strict';

let tedHraje = 'circle';

const HrajeElm = document.querySelector('.hra--circle');

const rozehrano = (e) => {
  if (tedHraje === 'circle') {
    e.target.classList.add('policko_hraje_kolecko');
    e.target.disabled = true;
    HrajeElm.src = 'obrazky/cross.svg';
    tedHraje = 'cross';
  } else if (tedHraje === 'cross') {
    e.target.classList.add('policko_hraje_krizek');
    e.target.disabled = true;
    HrajeElm.src = 'obrazky/circle.svg';
    tedHraje = 'circle';
  }
  e.target.disabled = true;
  const winning = isWinningMove(e.target);

  if (winning === true && getSymbol(e.target) === 'circle') {
    let hlaska1 = `Toto kolo zvítězil kroužek`;
    setTimeout(() => {
      alert(hlaska1);
      location.href = 'hra.html';
    }, 200);
  } else if (winning === true && getSymbol(e.target) === 'cross') {
    let hlaska2 = `Toto kolo zvítězil křížek`;
    setTimeout(() => {
      alert(hlaska2);
      location.href = 'hra.html';
    }, 200);
  }
};

const pole = document.querySelectorAll('.policko');
for (let i = 0; i < pole.length; i++) {
  pole[i].addEventListener('click', rozehrano);
}

/*ukol c5*/

/*Pro detekci výherního tahu budeš potřebovat několik pomocných funkcí.*/

const hraHlavniObsahSize = 10; // 10x10

const getPosition = (e) => {
  let eIndex = 0;
  while (eIndex < pole.length) {
    if (e === pole[eIndex]) {
      break;
    }
    eIndex++;
  }
  return {
    row: Math.floor(eIndex / hraHlavniObsahSize),
    column: eIndex % hraHlavniObsahSize,
  };
};

const getField = (row, column) => pole[row * hraHlavniObsahSize + column];

const getSymbol = (e) => {
  // Název třídy přizpůsob tvému kódu.
  if (e.classList.contains('policko_hraje_krizek')) {
    return 'cross';
  } else if (e.classList.contains('policko_hraje_kolecko')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (e) => {
  const origin = getPosition(e);
  const symbol = getSymbol(e);
  const boardSize = hraHlavniObsahSize;

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
