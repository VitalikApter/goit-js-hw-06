const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const liForListArray = ( arr ) => 
arr.map((item) => {
  const elLi = document.createElement('li');
  elLi.innerText = item;
  elLi.classList.add('item');
  return elLi;
});

const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...liForListArray(ingredients));