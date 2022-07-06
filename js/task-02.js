const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// - Создаст отдельный элемент <li>. Обзательно используй 
//    метод document.createElement().
// - Добавит название ингредиента как его текстовое содержимое.
// - Добавит элементу класс item.
// - После чего вставит все <li> за одну операцию в список ul#ingredients.

const ulRef = document.querySelector('#ingredients')
const addLi = items => {
  return items.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  })
}
const elements = addLi(ingredients);
ulRef.append(...elements);
