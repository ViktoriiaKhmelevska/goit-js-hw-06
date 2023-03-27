const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);
inputEl.addEventListener('input', onInput)

function onInput(event) {
    event.preventDefault();
    if (!inputEl.value) {
        console.log(inputEl.value);
         outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = inputEl.value;
    };
}

