function add() {
  const value = document.querySelector('.js-input').value;
  document.querySelector('body').innerHTML += `${value}<br>`;
}