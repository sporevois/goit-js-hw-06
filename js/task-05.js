// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна
// отображаться строка "Anonymous".

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
   event.currentTarget.value.length === 0 ?
        outputRef.textContent = "Anonymous":
        outputRef.textContent = event.currentTarget.value;
}