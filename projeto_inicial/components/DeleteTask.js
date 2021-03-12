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

export default DeleteButton;