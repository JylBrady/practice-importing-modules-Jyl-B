const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

let taskList = ['Relax'];

taskManager.addTask(taskList, 'Clean room');
taskManager.addTask(taskList, 'Wash Car');
taskManager.addTask(taskList, 'Take Out Trash');
taskManager.listTasks(taskList);

fileHandler.saveTasks('tasks.json', taskList);

let fileTasks = fileHandler.loadTasks('./tasks.json');
for (let task of fileTasks) {
  if (task.length > 0 && !taskList.includes(task)) {
    taskList.push(task);
  }
}
console.log(taskList);

