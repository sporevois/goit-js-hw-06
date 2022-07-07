const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания элементов <img> 
// вложенных в < li >.Для создания разметки используй шаблонные строки 
// и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const creatImg = ({ url, alt }) =>
  `<li style = "margin-bottom:20px"><img src="${url}" alt="${alt}" style = "display:block; max-width:420px;"></li>`;

const createImgArray = (array) => 
  array.reduce((acc, item) =>
    acc + creatImg(item), "")

const galleryRef = document.querySelector('.gallery')
galleryRef.setAttribute("style", "display:grid; display:flex; flex-direction:column; list-style:none; margin:0; padding:0");
galleryRef.insertAdjacentHTML("afterbegin", createImgArray(images));


