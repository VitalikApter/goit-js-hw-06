let counterValue = 0;

const refs = {
    wrapper: document.querySelector('.counter'),
    value: document.querySelector('.value'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
  };
  
  
  
  const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
  };

  refs.incrementBtn.addEventListener('click', increment);
  refs.decrementBtn.addEventListener('click', decrement);