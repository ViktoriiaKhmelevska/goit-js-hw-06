const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`)
inputEl = addEventListener(`input`, onClick);
function onClick() {
    for (let i = 0; i < Number(inputEl.value); i += 1) { 
    spanEl.style.fontSize = `${inputEl.value}px`;
};
}