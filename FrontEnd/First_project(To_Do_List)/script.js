
function display_input() {
    document.getElementsByClassName('popup')[0].style.display = 'block'
}
function remove_input() {
    document.getElementsByClassName('popup')[0].style.display = 'none'
}

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const addButton = document.getElementById("add");
    const taskContainer = document.querySelector(".container");
    const filters = document.querySelectorAll(".filter");
    const titleInput = document.querySelector(".input-card input");
    const editButton = document.createElement("button");
    let currentEditingTask = null;

    function remove_input() {
        popup.style.display = "none";
        titleInput.value = "";
        addButton.style.display = "block";
        editButton.style.display = "none";
        currentEditingTask = null;
    }

    function getTasksFromStorage() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    function saveTasksToStorage(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks(filter = "all") {
        taskContainer.innerHTML = "";
        const tasks = getTasksFromStorage();

        tasks.forEach(task => {
            if (filter === "all" || task.status === filter) {
                createTaskElement(task);
            }
        });
    }

    function createTaskElement(task) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.setAttribute("data-status", task.status);

        const isCompleted = task.status === "completed";
        const textDecoration = isCompleted ? "line-through" : "none";
        const textColor = isCompleted ? "gray" : "black";

        taskElement.innerHTML = `
            <input type="checkbox" ${isCompleted ? "checked" : ""}>
            <h5 style="text-decoration: ${textDecoration}; color: ${textColor};">${task.title}</h5>
            <div>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        `;

        taskContainer.appendChild(taskElement);
    }

    function addTask() {
        const title = titleInput.value.trim();
        if (title === "") {
            alert("Title cannot be empty!");
            return;
        }

        const tasks = getTasksFromStorage();
        const newTask = { title, status: "pending" };
        tasks.push(newTask);
        saveTasksToStorage(tasks);

        loadTasks(document.querySelector(".filter-active").innerText.toLowerCase());
        remove_input();
    }

    function deleteTask(taskElement) {
        const taskTitle = taskElement.querySelector("h5").innerText;
        let tasks = getTasksFromStorage();

        tasks = tasks.filter(task => task.title !== taskTitle);
        saveTasksToStorage(tasks);

        loadTasks(document.querySelector(".filter-active").innerText.toLowerCase());
    }

    function toggleTask(event) {
        const taskElement = event.target.closest(".task");
        const taskTitle = taskElement.querySelector("h5").innerText;
        let tasks = getTasksFromStorage();

        tasks = tasks.map(task => {
            if (task.title === taskTitle) {
                task.status = event.target.checked ? "completed" : "pending";
            }
            return task;
        });

        saveTasksToStorage(tasks);
        loadTasks(document.querySelector(".filter-active").innerText.toLowerCase());
    }

    function filterTasks(event, filter) {
        let status = filter.toLowerCase();
        filters.forEach(f => f.classList.remove("filter-active"));
        event.target.classList.add("filter-active");
        loadTasks(status);
    }

    function editTask(taskElement) {
        const taskTitle = taskElement.querySelector("h5").innerText;
        currentEditingTask = taskTitle;

        titleInput.value = taskTitle;
        popup.style.display = "block";
        addButton.style.display = "none";
        editButton.style.display = "block";
    }

    function saveEditedTask() {
        if (!currentEditingTask) return;

        const newTitle = titleInput.value.trim();
        if (newTitle === "") {
            alert("Title cannot be empty!");
            return;
        }

        let tasks = getTasksFromStorage();
        tasks = tasks.map(task => {
            if (task.title === currentEditingTask) {
                task.title = newTitle;
            }
            return task;
        });

        saveTasksToStorage(tasks);
        loadTasks(document.querySelector(".filter-active").innerText.toLowerCase());
        remove_input();
    }

    // ✅ Event Delegation
    taskContainer.addEventListener("click", (event) => {
        const target = event.target;
        const taskElement = target.closest(".task");

        if (target.classList.contains("fa-trash")) {
            deleteTask(taskElement);
        } else if (target.classList.contains("fa-pen-to-square")) {
            editTask(taskElement);
        } else if (target.tagName === "INPUT" && target.type === "checkbox") {
            toggleTask(event);
        }
    });

    addButton.addEventListener("click", addTask);

    // ✅ Create and add the Edit button dynamically
    editButton.id = "edit";
    editButton.textContent = "Edit";
    editButton.style.display = "none";
    editButton.style.position = "absolute";
    editButton.style.width = "191px";
    editButton.style.height = "57px";
    editButton.style.left = "170px";
    editButton.style.top = "314px";
    editButton.style.color = "#FFFFFF";
    editButton.style.background = "#19B65F";
    editButton.style.borderRadius = "10px";
    editButton.style.fontFamily = "'Roboto'";
    editButton.style.fontWeight = "700";
    editButton.style.fontSize = "20px";
    editButton.style.cursor = "pointer";

    editButton.addEventListener("click", saveEditedTask);
    popup.querySelector(".input-card").appendChild(editButton);

    filters.forEach(filter => {
        filter.addEventListener("click", (event) => filterTasks(event, filter.innerText));
    });

    loadTasks();
});
