
let counterValue = 0;
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

let valueEl = document.querySelector("#value");


buttonDec.addEventListener("click", onClickDec);
buttonInc.addEventListener("click", onClickInc);

function onClickDec() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onClickInc() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}