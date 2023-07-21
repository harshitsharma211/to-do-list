var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
    var task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    var newTask = document.createElement("li");
    newTask.innerText = task;
    alert("Task Added Successfully");
    newTask.innerHTML += '<button class="delete-button" onclick="deleteTask(this)">Delete</button>';

    newTask.addEventListener("click", function() {
        this.classList.toggle("completed");
        alert("Task Completed You Can Delete It");
    });

    taskList.appendChild(newTask);
    taskInput.value = "";
    
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    taskList.removeChild(taskItem);
    alert("Task  Deleted");
    
}


