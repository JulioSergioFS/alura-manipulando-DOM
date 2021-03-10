const button = document.querySelector("[data-form-button]");
const task = document.querySelector(".content");

button.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]").value;
    task.textContent = input;
});