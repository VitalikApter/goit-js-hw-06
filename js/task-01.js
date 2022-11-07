const itemsElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsElements.length}`);

const elementName = document.querySelectorAll('.item');
elementName.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})
