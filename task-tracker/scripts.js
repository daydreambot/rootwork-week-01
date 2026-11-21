const taskLeft = document.getElementById('remaining-tasks');
const taskForm = document.querySelector('.form-sect');
const taskInput = document.getElementById('new-task');
const errorMessage = document.getElementById('error-message');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = [];
let currentFilter = 'all';

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

taskInput.value = '';
});



console.log(tasks)
