'Use strict';

console.log('Funguji');

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
};

const pole = document.querySelectorAll('.hra--hlavni--obsah');
for (let i = 0; i < pole.length; i++) {
  pole[i].addEventListener('click', rozehrano);
}

/*ukol c5*/
const hraHlavniObsahSize = 10; // 10x10

const getPosition = (policko) => {
  let polickoIndex = 0;
  while (polickoIndex < HrajeElm.length) {
    if (policko === HrajeElm[polickoIndex]) {
      break;
    }
    polickoIndex++;
  }
  return {
    row: Math.floor(polickoIndex / hraHlavniObsahSize),
    column: polickoIndex % hraHlavniObsahSize,
  };
};

/*Pro detekci výherního tahu budeš potřebovat několik pomocných funkcí.

const field = [{ row: 0, column: 0 }];

console.log(getPosition(nejakyButtonElement));

const hraHlavniObsahSize = 10; // 10x10
const hraHlavniObsah = document.querySelectorAll('.policko'); // Selektor pozměň tak, aby odpovídal tvému kódu.
const getPosition = (policko) => {
  let polickoIndex = 0;
  while (polickoIndex < hraHlavniObsah.length) {
    if (policko === hraHlavniObsah[polickoIndex]) {
      break;
    }
    polickoIndex++;
  }
  return {
    row: Math.floor(polickoIndex / hraHlavniObsahSize),
    column: polickoIndex % hraHlavniObsahSize,
  };
};

console.log(getPosition('policko'));

const handleClick = () => {
  console.log(getPosition('policko'));
};
document.addEventListener('click', handleClick);

/*
const getField = (row, column) => {
  hraHlavniObsah[row * hraHlavniObsahSize + column];
};

console.log(getField);*/
