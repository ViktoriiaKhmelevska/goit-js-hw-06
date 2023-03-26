// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

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