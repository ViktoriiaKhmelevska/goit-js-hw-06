const inputEl = document.querySelector(`#validation-input`);
const textLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInput)

function onInput(event) {
  if (event.currentTarget.value.length === Number(textLength)) {
    if (event.currentTarget.classList.contains(`invalid`)){
      inputEl.classList.replace(`invalid`, `valid`);
    }
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.add(`invalid`);
  }  
}

