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

console.log(getPosition(pole[65]));

const handleClick = () => {
  console.log(getPosition('pole[?]'));
};
document.addEventListener('click', handleClick);
