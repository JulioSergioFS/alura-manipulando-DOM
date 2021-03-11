function createTask(event) {
    const task = document.querySelector(".content");

    event.preventDefault();
    const input = document.querySelector("[data-form-input]").value;
    task.textContent = input;
}

const button = document.querySelector("[data-form-button]");

button.addEventListener('click', createTask);