import FinishedButton from './components/FinishTask.js'
import DeleteButton from './components/DeleteTask.js'

const createTask = (event) => {
    const input = document.querySelector("[data-form-input]");
    const inputValue = input.value;
    const listOfTasks = document.querySelector("[data-list]");

    event.preventDefault();

    const task = document.createElement("li");
    task.classList.add('task');

    const taskContent = `<p class="content">${inputValue}</p>`;
    task.innerHTML = taskContent;
    task.appendChild(FinishedButton());
    task.appendChild(DeleteButton());
    listOfTasks.appendChild(task);

    input.value = " ";
};

const button = document.querySelector("[data-form-button]");

button.addEventListener('click', createTask);