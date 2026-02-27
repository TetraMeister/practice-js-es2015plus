import { files } from './data.js';
const newPEl = document.createElement('p');

let sum = 0;

files.forEach((e) => {
  const { size: { length }, size: { unit = 'B' } } = e;

  sum += convertToB(unit, length);
});

newPEl.textContent = sum + ' B';
document.querySelector('body').appendChild(newPEl);


function convertToB(unit, size) {
  if (unit === 'B') {
    return size;
  };

  if (unit === 'KB') {
    return size * 1024
  };

  if (unit === 'MB') {
    return size * 1024 * 1024
  };

  if (unit === 'GB') {
    return size * 1024 * 1024 * 1024
  };
}