let tasks = [];
let myName = "mytext";
let myAge = 20;
let isWorking = true; 

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push( task );
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex align-items-center';
   


    listItem.innerHTML = `
    <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    ${task}
    <button type="button" class="btn btn-outline-danger btn-sm mr-2" onclick="deleteTask(${index})">Delete</button>
    </li>
    `;

    taskList.appendChild(listItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

