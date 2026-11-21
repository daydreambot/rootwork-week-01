const taskLeft = document.getElementById('remaining-tasks');
const taskForm = document.querySelector('.form-sect');
const taskInput = document.getElementById('new-task');
const errorMessage = document.getElementById('error-message');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = [];
let currentFilter = 'all';

function renderTasks() {
    taskList.innerHTML = '';
    let filteredTasks = tasks.filter(task => task.completed === false);
    taskLeft.textContent = filteredTasks.length

    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => task.completed === false);
        if (filteredTasks.length === 0) {
            emptyState.style.display = 'block';
            emptyState.textContent = 'No tasks yet. Add one above to get started!';
        }

        else {
            emptyState.style.display = 'none';
        }
    }

    else if  (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed === true);
        if (filteredTasks.length === 0) {
            emptyState.style.display = 'block';
            emptyState.textContent = 'No completed tasks yet!';
        }

        else {
            emptyState.style.display = 'none';
        }
    }
    
    else {
        filteredTasks = tasks;
        if (filteredTasks.length === 0) {
            emptyState.style.display = 'block';
            emptyState.textContent = 'No tasks yet. Add one above to get started!';
        }

        else {
            emptyState.style.display = 'none';
        }
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.dataset.id = task.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.checked =task.completed;
        checkbox.setAttribute('aria-label',`Mark "${task.text}" as complete`)

        const span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = task.text;
    

        if (task.completed) {
            span.classList.add('complete-task');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('aria-label',`Delete ${task.text}`)

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });
};

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const trimmedText = taskInput.value.trim();

if (trimmedText === '') {
    errorMessage.textContent = 'Please add a task!';
    taskInput.focus();
    return;
}

errorMessage.textContent = '';

const taskObject = {
        id: Date.now(),
        text: trimmedText,
        completed: false
    };

tasks.push(taskObject);
renderTasks();

taskInput.value = '';



});




