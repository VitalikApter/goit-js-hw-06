const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  const ingredientsElement = document.querySelector('ul#ingredients');
  console.log(ingredientsElement);

  for(const ingredient of ingredients){
    const newTag = document.createElement('li');
    newTag.textContent = ingredient;
    newTag.classList.add('item');
    ingredientsElement.append(newTag);
  }