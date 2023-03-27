const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`)
inputEl.addEventListener(`input`, onClick);
function onClick() {
      spanEl.style.fontSize = `${inputEl.value}px`;
}