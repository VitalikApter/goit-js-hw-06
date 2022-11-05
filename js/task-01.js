const itemsElements = document.querySelector('ul#categories').children.length;
console.log('Number of categories:',itemsElements);

const elementName = document.querySelectorAll('.item');
elementName.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})
