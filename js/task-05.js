const inputElement = document.querySelector('#name-input');

const spanElement  = document.querySelector('#name-output');


inputElement.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() !== '') {
        spanElement.textContent = event.currentTarget.value;  
    } else {
        spanElement.textContent = 'Anonymous'
    }
});