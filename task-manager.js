const tasks = [
    {
        title: "Finish Javascript milestone", 
        category: "Education", 
        completed: true , 
        priority: "high" 
    }, 
    {
        title: "Buy groceries for the week",
        category: "Personal", 
        completed: true , 
        priority: "high"
    }, 
    {
        title: "Water the plants", 
        category: "Chores", 
        completed: true , 
        priority: "low"
    },
    {
        title: "Reply to emails", 
        category: "Work", 
        completed: true , 
        priority: "medium"
    },
    {
        title: "Schedule doctor's appointment", 
        category: "Personal", 
        completed: false , 
        priority: "low"
    },
    {
        title: "Read book", 
        category: "Education", 
        completed: true , 
        priority: "medium"
    },
    {
        title: "Take out the trash", 
        category: "Chores", 
        completed: false , 
        priority: "high"
    }
];

//function to Display Tasks
function displayTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        const currentTask = tasks[i];
        console.log(`Title ${i+1}: ${currentTask.title},
            Category: ${currentTask.category},
            Completed?: ${currentTask.completed},
            Priority: ${currentTask.priority}`);
    }
}

displayTasks(tasks);

//function for total number of tasks
function totalTasks(tasks) {
    return tasks.length;
}

console.log('Total Number of Tasks: ' + totalTasks(tasks));

//function for completed and pending tasks 
function calculateStats(tasks) {
    let completedTasks = [];
    let pendingTasks = [];
    let WorkTaskCount = 0
    let ChoresTaskCount = 0
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            completedTasks.push(tasks[i])
            }
        if (tasks[i].completed === false) {
            pendingTasks.push(tasks[i])
        }
        if (tasks[i].category === "Chores") {
            ChoresTaskCount += 1
        }
        if (tasks[i].category === "Work") {
            WorkTaskCount += 1
        }
    }
    console.log('Number of completed tasks: ' + completedTasks.length)
    console.log('Number of pending tasks: ' + pendingTasks.length)
    console.log('Number of Work tasks: ' + WorkTaskCount)
    console.log('Number of Chores: ' + ChoresTaskCount)
} 

calculateStats(tasks);

function displayHighPriorityTasks(tasks) {
    let taskFound = false;
    console.log('\nUNCOMPLETED HIGH PRIORITY TASKS\n')

    for (let i = 0; i < tasks.length; i++) {
        const highPriorityTask = tasks[i];

        if (highPriorityTask.priority === "high" && 
            highPriorityTask.completed === false) {
            console.log(`Title ${i+1}: ${highPriorityTask.title},
            Category: ${highPriorityTask.category},
            Completed?: ${highPriorityTask.completed},
            Priority: ${highPriorityTask.priority}`);
            let taskFound = true;
        }
    }
    if (!taskFound) {
        console.log('There are no uncompleted high priority tasks');
    }
}

displayHighPriorityTasks(tasks);

function addTasks(titles, categories, priorities, completedBool) {
    const newTask = {
        title: titles,
        category: categories,
        priority: priorities,
        completed: completedBool,
    };
    tasks.push(newTask)
}

addTasks("Walk the dog", "Chores", false, "medium");
displayTasks(tasks);