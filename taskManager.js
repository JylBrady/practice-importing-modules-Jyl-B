/*
Modules & Package Management | Lesson 3 
Practice: Importing Modules 

Instructions: 
    In this practice, you will use require to import and use both custom and built-in 
    Node.js modules to create a simple task manager application. This activity focuses 
    on reinforcing the concept of modular programming and the use of require to 
    connect different modules. 
Preparation 
    1. Create a new project folder named task-manager. 
    2. Inside the folder, create the following files: 
        ○ taskManager.js: A custom module for managing tasks. 
        ○ fileHandler.js: A custom module for saving and reading tasks from a file. 
        ○ app.js: The main file that will import and use the other modules. 

Tasks 
  1. Create the taskManager.js Module: 
      ○ Define and export the following functions: 
        1. addTask(tasks, task): Adds a new task to the task list. 
        2. listTasks(tasks): Logs all tasks to the console. 
  2. Create the fileHandler.js Module: 
      ○ Use the fs (File System) built-in module to define and export the following functions: 
        1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON format. 
        2. loadTasks(filePath): Reads and parses the tasks from the file. 
            If the file doesn’t exist, return an empty array. 
  3. Use the Modules in app.js: 
      ○ Import the custom modules (taskManager.js and fileHandler.js) and the path built-in module. 
      ○ Implement the following functionality:
        1. Load existing tasks from a file named tasks.json. 
        2. Add new tasks to the list. 
        3. List all tasks. 
        4. Save the updated task list back to the file. 

Requirements 
    ● Use require to import all modules. 
    ● Test the program by adding, listing, and saving tasks.
*/


// 1. Create the taskManager.js Module: 

//defines addTask(tasks, task): Adds a new task to the task list. 
function addTask(tasks, task) {
  tasks.push(task);
  console.log(`${task} has been added to task list`);
  //return tasks;
}

//defines listTasks(tasks): Logs all tasks to the console. 
function listTasks(tasks) {
  console.log(tasks);
  return tasks;
}

//exports the functions: 
module.exports = { addTask, listTasks };
