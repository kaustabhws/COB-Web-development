function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("tasks");
    const taskElement = document.createElement("div");
    taskElement.className = "task";

    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;
    taskElement.appendChild(taskTextElement);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        taskElement.remove();
    };
    taskElement.appendChild(deleteButton);

    taskList.appendChild(taskElement);
    taskInput.value = "";
}