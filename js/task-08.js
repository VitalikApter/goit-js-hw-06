const formEl = document.querySelector('.login-form');

const handleLoginFormSubmite = e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Усі поля мають бути заповнені!');
  }

  console.log({
    email: email.value,
    password: password.value,
  });
  e.currentTarget.reset();
};

formEl.addEventListener('submit', handleLoginFormSubmite);