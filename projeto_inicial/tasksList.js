const button = document.querySelector("[data-form-button]");

button.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('I got clicked!')
});