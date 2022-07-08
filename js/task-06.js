// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.
        
// - Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// - Если введено подходящее количество символов, то border инпута
// становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS - классы valid и invalid, которые
// мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector('#validation-input')
inputRef.addEventListener('blur', onInputCheckLength)
console.log('SYMBOL LIMIT:', inputRef.getAttribute("data-length"))

function addValidClass() {
    inputRef.classList.add('valid')
    console.log('VALID')
}
function addInvalidClass() {
    inputRef.classList.add('invalid')
    console.log('INVALID')
}

function onInputCheckLength(event) {
    const inputLength = this.value.length
    const inputLimit = Number(inputRef.getAttribute("data-length"))
    console.log('SYMBOL COUNT:', inputLength)
        inputLength === inputLimit ?
        addValidClass():
        addInvalidClass();  
}