function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);
const bodyEl = document.querySelector(`body`)
buttonEl.addEventListener(`click`, changeColor);

function changeColor() {
    let colorRandon = getRandomHexColor();
    spanEl.textContent = colorRandon;
bodyEl.style.backgroundColor = colorRandon;
}