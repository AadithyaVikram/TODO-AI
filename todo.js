let tasks = [];

function addTask() {
    const taskName = taskInput.value.trim();
    const taskDescription = descriptionInput.value.trim();

    if(taskName === "" || taskDescription === "") {
        alert('Please add text for both task and description.');
        return;
    }

    const task = {
        name: taskName,
        description: taskDescription,
        completed: false      
    };
    tasks.push(task);

    displayTasks();
    taskInput.value = '';
    descriptionInput.value = '';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function editTask(index) {
    taskInput.value = tasks[index].name;
    descriptionInput.value = tasks[index].description;
    deleteTask(index);
}

function markTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML +=
            `<li class="list-group-item ${tasks[i].completed ? 'bg-success' : ''}">
                <h5>${tasks[i].name}</h5>
                <p>${tasks[i].description}</p>
                <button onclick="markTask(${i})" class="btn btn-warning">${tasks[i].completed ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
                <button onclick="editTask(${i})" class="btn btn-primary">Edit</button>
                <button onclick="deleteTask(${i})" class="btn btn-danger">Delete</button>
            </li>`;
    }
}