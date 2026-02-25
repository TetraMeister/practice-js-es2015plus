const totalPriceEl = document.querySelector('.cart__total-price');
const [...inputElList] = document.getElementsByClassName('cart__quantity');

document.querySelector('.cart__btn-calculate').addEventListener('click', () => {
  let sum = 0;
  inputElList.forEach((el) => {
    const { value } = el;
    const { dataset: { price } } = el;

    if (value && value >= 0) {
      sum += value * price;
    } else {
      alert('Wpisz poprawne ilości!')
    }
    totalPriceEl.innerText = sum;
  });
});