// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция 
// элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их 
// в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const input = document.querySelector('input')
const container= document.querySelector('#boxes')
let amount 

createBtn.addEventListener('click', getAmount)
destroyBtn.addEventListener('click',removeBoxes)


function getAmount() {
  amount = Number(document.querySelector('input').value)
  createBoxes(amount)
}
  
function createBoxes(amount) {
  const basicSize = 20
  for (let i = 1; i <= amount; i += 1) {
    const size = basicSize + i * 10;
    container.insertAdjacentHTML("beforeend",
    `<div style ="
    width: ${size}px; 
    height: ${size}px;
    background-color: ${getRandomHexColor()};" ></div>`);
  }
}

function removeBoxes() {
  container.innerHTML = "";
  input.value = "";
}