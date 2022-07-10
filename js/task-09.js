// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн 
// стиль при клике на button.change - color и выводит значение 
// цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body')
const buttonRef = document.querySelector('.change-color')
const colorRef = document.querySelector('.color')

buttonRef.addEventListener('click', onBodyChangeBgColor)

function onBodyChangeBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor()
  colorRef.textContent = getRandomHexColor()
}



