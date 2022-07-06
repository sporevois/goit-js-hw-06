// Напиши скрипт который:
// -Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.

// - Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).

const liItemsRef = document.querySelectorAll('.item')
console.log('Number of categories:', liItemsRef.length)

liItemsRef.forEach(item => {
    const h2Ref = item.querySelector('h2')
    console.log('Category:', h2Ref.textContent)
    const liRef = item.querySelectorAll('li')
    console.log('Elements:',liRef.length)
})