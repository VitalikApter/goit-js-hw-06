const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}
console.log(refs);


const handleChangeFontSize = (event) => {
    refs.input = Number(event.target.value);
    refs.span.style.fontSize = `${refs.input}px`;
}


refs.input.addEventListener('input', handleChangeFontSize);