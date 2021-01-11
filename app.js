let counter = document.querySelector('#counter');
let btnAdd = document.querySelector('#button1');
let btnMinus = document.querySelector('#button2');

let count = 0;

function addOne() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > 0) {
    counter.style.color = '#78bc1e';
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  } else {
    counter.style.color = 'red';
  }
  counter.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 500, fill: 'forwards' });
}

function minusOne() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML > 0) {
    counter.style.color = '#78bc1e';
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  } else {
    counter.style.color = 'red';
  }
  counter.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 500, fill: 'forwards' });
}

btnAdd.addEventListener('click', addOne);
btnMinus.addEventListener('click', minusOne);

if (count < 0) {
  document.getElementById('#counter').style.color = 'red';
}
