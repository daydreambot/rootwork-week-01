## how to open/run the app
- Open the task-tracker project folder on your computer containing index.html, styles.css, and script.js.
- Open the index.html in a browser like Chrome and then you can start adding, deleting and marking tasks as done.

## how task state is stored and rendered
- The task state is stored inside script.js - tasks variable is an array acting like the main storage source for the tasks added by the user. Inside the array are objects with the following properties;
    - id - A timestamp generated using Date.now()
    - text - The string containing the description of the task
    - completed - This has a boolean value to show whether the tasks are completed or not.
- There is also a currentFilter variable which tracks the filter tab that is currently selected by the user.

- The rendering of tasks is done by renderTasks function inside the script.js. Whenever tasks are added, checked off, deleted, or filtered, renderTasks updates the UI from the tasks array and displays the appropriate information to the user. renderTasks function,does the following:
    - taskList.innerHTML = '' so as to remove all the HTML content and child elements inside the taskList element.
    - Filters tasks for items where task.completed is false and updates remaining tasks counter so the incomplete count stays accurate across all filters.
    - Displays tasks based on currentFilter and shows an empty state with an appropriate message whenever the filtered list has no items.
    - Builds <li>, <input type="checkbox">, <span>, and <button> elements using document.createElement(). Task text is inserted safely in the span elements with span.textContent = task.text  and completed tasks gets the .complete-task strikethrough CSS class.

## how event listeners work
- taskForm.addEventListener('submit', function(event) ) listens on form section in index.html,  and the function inside the event listener uses event.preventDefault() to prevent page reloads, validates the input, pushes a new task object into tasks, clears the input box, and calls renderTasks().

- for filter buttons (click): Each filter button listens for clicks, sets currentFilter using button.dataset.filter, updates active filter CSS styling and aria-pressed states across all filter buttons, and calls renderTasks().

- for checkboxes (change) & delete buttons (click): Inside renderTasks(), each created checkbox listens for change to toggle task.completed = !task.completed and re-display the page, while each Delete button listens for click to filter that task out of tasks and re-render.


## how blank input is prevented
- Inside the form's submit event handler,
    - whitespace in the front and back of task descripton is removed using const trimmedText = taskInput.value.trim().

    - If trimmedText is empty, the function displays "Please add a task!" in the alert element, returns keyboard focus to the input field with taskInput.focus(), and exits the function immediately so no empty or whitespace-only task is added.
    - When valid text is submitted, errorMessage.textContent is cleared.
## one bug you debugged
- The Issue: Clicking the Delete button next to a single task erased every task in the list instead of only the selected one.

- The Cause: Inside the delete button's click listener, the .filter() callback compared each item's ID against itself (tasks = tasks.filter((t) => t.id !== t.id)) so because t.id !== t.id is always false, every item was filtered out.

- The Fix: I updated the comparison to check each item's ID against the clicked task's ID - tasks = tasks.filter((t) => t.id !== task.id);

## manual test outcomes for adding, toggling, deleting, filtering, empty input and keyboard flow
- Adding Tasks: Entering text and clicking Add or pressing Enter adds the task, clears the input box, and increases the remaining task counter.

- Empty & Space-Only Input: Submitting an empty field or spaces-only input prevents task creation, displays "Please add a task!", and keeps focus on the input box.

- Toggling Completion: Checking a task applies strikethrough styling, updates task.completed, and decreases the remaining task count; unchecking reverses both.

- Deleting Tasks: Clicking Delete removes only the selected task and updates the list and remaining counter accurately.

- Filtering Views: Switching between All, Active, and Completed updates shows the corresponding tasks or empty-state message. 

- Keyboard Flow: Navigating across the input field, Add button, filter buttons, checkboxes, and Delete buttons using Tab, Enter, and Space works without a mouse.

## AI usage disclosure 
- I used AI as a learning assistant during this project for step by step walkthrough, JavaScript state-to-DOM rendering concepts, and debugging guidance.