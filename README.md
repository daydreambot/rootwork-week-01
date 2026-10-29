## WHAT THE PROGRAM DOES
This program is a console based task manager which assigns each task different properties such as whether it is completed, the priority level and the category of the task. It can be used to add tasks and check pending tasks and display specific categories of tasks

## HOW I BROKE DOWN THE PROGRAM
1. First, I built the tasks array and added 7 objects inside it so I can have something to work with
2. Then I created a function which contains a for loop for printing out all the tasks in the array and their properties
3. Then I focused on analysing the data using a function which calculates different statistics such as the number of tasks in specific categories
4. Then I figured out how to add a new task into the original tasks array by creating a function to push new task into the array.

## Concepts I used
- Array: I used it to store a list of the original tasks, a list of completed tasks and a list of pending tasks
- Objects: used to specify different details about the tasks
- For loops: used in my displayTasks, calculateTasks and displayHighPriorityTasks function to iterate through the array
- Template Literals: to format the output printed to the console cleanly. I used it in displayTasks and displayHighPriorityTasks function
- .push() method : I used it in addTasks function to add a new task

## The hardest part
The most difficult part was writing the displayHighPriorityTasks function

## One thing I would improve
Writing and understanding good logic for each specific functions. Also remembering to use let and const to declare variables.

## AI disclosure
- What I used it for: I used AI assistant to help me understand the logical steps of the assignment without writing any code for me and I used it to understand how to structure my objects, the difference between function parameters and arguments.
- One suggestion I accepted: I accepted the suggestion to add a variable to check whether a uncompleted high priority task exist in the task array or not.
- One thing I had to understand/verify myself: I had to understand the use of template literals myself.