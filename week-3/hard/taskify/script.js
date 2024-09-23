// Global variable for storing the current column to add the task
let currentColumn;

// Initialize the tasks from localStorage on load
window.onload = function () {
  loadTasks();
};

function openAddTaskModal(column) {
  currentColumn = column;
  document.getElementById("addTaskModal").style.display = "block";
}

function closeAddTaskModal() {
  document.getElementById("addTaskModal").style.display = "none";
  clearModalInputs();
}

// Add Task Function
function addTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const priority = document.getElementById("taskPriority").value;

  if (title === "") {
    alert("Title is required");
    return;
  }

  const task = {
    title,
    description,
    priority,
    date: new Date().toLocaleDateString(),
  };

  saveTaskToStorage(currentColumn, task);
  closeAddTaskModal();
  loadTasks(); // Reload tasks after adding a new one
}

// Save the task to localStorage
function saveTaskToStorage(column, task) {
  let tasks = JSON.parse(localStorage.getItem(column)) || [];
  tasks.push(task);
  localStorage.setItem(column, JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  ["todo", "inProgress", "underReview", "finished"].forEach((column) => {
    const taskContainer = document.getElementById(column);
    taskContainer.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem(column)) || [];
    tasks.forEach((task) => {
      const taskCard = createTaskCard(task);
      taskContainer.appendChild(taskCard);
    });
  });
}

// Create a task card element
function createTaskCard(task) {
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  const taskDelAndEdit = document.createElement("div");
  taskDelAndEdit.classList.add("task-del-and-edit");
  const taskElement = document.createElement("div");
  taskElement.classList.add("taskElement");
  const taskDelete = document.createElement("span");
  taskDelete.innerHTML = "&times";

  const taskEdit = document.createElement("span");
  taskEdit.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const taskTitle = document.createElement("h4");
  taskTitle.textContent = task.title;

  const taskDescription = document.createElement("p");
  taskDescription.textContent = task.description;

  const taskPriority = document.createElement("span");
  taskPriority.classList.add("priority", task.priority);
  taskPriority.textContent = task.priority;

  const taskDate = document.createElement("p");
  taskDate.textContent = `Date: ${task.date}`;

  taskDelAndEdit.appendChild(taskDelete);
  taskDelAndEdit.appendChild(taskEdit);
  taskElement.appendChild(taskTitle);
  taskElement.appendChild(taskDescription);
  taskElement.appendChild(taskPriority);
  taskElement.appendChild(taskDate);
  taskCard.appendChild(taskElement);
  taskCard.appendChild(taskDelAndEdit);

  return taskCard;
}

// Clear modal inputs after adding task
function clearModalInputs() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("taskPriority").value = "Low";
}
