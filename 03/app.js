import { files } from './data.js';
import units from './units.json'
const newPEl = document.createElement('p');

let sum = 0;

files.forEach((e) => {
  const { size: { length }, size: { unit = 'B' } } = e;

  sum += convertToB(length, unit);
});

newPEl.textContent = sum + ' B';
document.querySelector('body').appendChild(newPEl);


function convertToB(size, unit) {
  if (units[unit]) {
    return size * units[unit]
  } else {
    alert('Baza danych nie posiada informacji na temat sposobu konwersji danej jednostki')
  }
}