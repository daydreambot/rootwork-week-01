const tasks = [
    {
        title: "Finish Javascript milestone", 
        category: "Education", 
        completed: false , 
        priority: "high" 
    }, 
    {
        title: "Buy groceries for the week",
        category: "Personal", 
        completed: false , 
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

console.log(displayTasks(tasks))