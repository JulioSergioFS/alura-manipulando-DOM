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

export default FinishedButton;