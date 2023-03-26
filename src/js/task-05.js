// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
{/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}

const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);
// console.dir(inputEl);
inputEl.addEventListener('change', onInput)
// inputEl.addEventListener('change', onChange)

function onInput(event) {
    event.preventDefault();
    if (!inputEl.value) {
        console.log(inputEl.value);
         outputEl.textContent = inputEl.value;
        // outputEl.value = 'Anonymous';
        return;
    } else {
        // console.log(inputEl.value);
        outputEl.textContent = inputEl.value;
    };
}
//     // console.log(evt);
//     console.log(inputEl.value);
//     // log()
// }

// function onChange(evt){
//     alert('Напишіть ще щось')
// }