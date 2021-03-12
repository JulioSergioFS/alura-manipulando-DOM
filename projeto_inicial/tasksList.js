( () => {
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


const FinishedButton = () => {
    const finishedButton = document.createElement("button");
    
    finishedButton.classList.add('check-button');
    finishedButton.innerText = 'Finish';

    finishedButton.addEventListener('click', finishTask);

    return finishedButton;
};

const finishTask = (event) => {
    const finishedButton = event.target;

    const finishedTask = finishedButton.parentElement;

    finishedTask.classList.toggle('done');
};


const DeleteButton = (event) => {
    const deleteButton = document.createElement("button");

    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    return deleteButton;
}

const deleteTask = (event) => {
    const deleteButton = event.target;

    const toDeleteTask = deleteButton.parentElement;

    toDeleteTask.remove();
}
})()