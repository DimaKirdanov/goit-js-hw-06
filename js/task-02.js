const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navItemElement = document.createElement('li');
// navItemElement.textContent = ingredients.forEach((item) => { };
navItemElement.classList.add('item');

const navList = document.querySelector('#ingredients');
navList.appendChild(navItemElement);