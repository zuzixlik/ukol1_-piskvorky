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
/*nevim zda je spravne pouziti br, jelikoz podminka funguje pouze na cely hlavni hraci obsah a ne na jednotlive tlacitka- asi neni dobre puvodni reseni za pomoci zalamovani radku s br */

const pole = document.querySelectorAll('.hra--hlavni--obsah');
for (let i = 0; i < pole.length; i++) {
  pole[i].addEventListener('click', rozehrano);
}
