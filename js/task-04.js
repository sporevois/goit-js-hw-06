
// const counterValue = document.querySelector('#value');
const decrimentBtn = document.querySelector('[data-action="decrement"]');
const incrimentBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value')
var counterValue = 0;

incrimentBtn.addEventListener('click', onIncrimentBtnClick);
decrimentBtn.addEventListener('click', onDecrimentBtnClick);

function onIncrimentBtnClick() {
    counterValue += 1;
    valueRef.textContent = `${counterValue}`
};
function onDecrimentBtnClick() {
    counterValue -= 1;
    valueRef.textContent = `${counterValue}`
}
