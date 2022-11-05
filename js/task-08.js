const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefult();

    const targetFormElements = event.currentTarget;

    const {
        email: { value: email },
        password: {value: password },
    } = targetFormElements.elements;

    if (email.length === 0 || password.length === 0) 
        return alert (" Усі поля повинні бути заповнені!");
    

    console.log( { email, password });

   targetFormElements.reset();
}