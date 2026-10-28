## Debug log

## Bug 1
## Problem
*The console.log to print out all the tasks is not working*

## What I observed
The terminal was not showing any output when I try to print the tasks

## What I checked 
I checked the tasks array I created and the displayTasks function to see if there was a syntax error
## Cause
 A typographical error when I was creating the tasks array, I named the variable asks instead of tasks

 ## Fix
 I corrected the variable name to tasks

 ## Bug 2
 The problem: The terminal prints zero as the total number of completed task
 What I observed: The terminal printed the number of completed task as zero three times in a row
 What I checked: I checked the calculateStats function again to see what is wrong with logic
 The cause: I declared the completedTask variable inside a for loop
 The fix: I declared the completedTask variable just before writing out the for loop logic

 ## Bug 3
 The problem:  I am trying to check the number of uncompleted high priority tasks 

 What I observed: The terminal shows 'undefined' ine each properties of the printed tasks.

 What I checked: I looked at the logic of my displayHighPriorityTasks function to see where I made a mistake

 The fix: I replaced the empty array I created initially to add the uncompleted high priority tasks to with a variable which is assigned the value of each object
