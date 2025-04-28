function addTask(tasks, task) {
  tasks.push(task);
  console.log(`${task} has been added to task list`);
  //return tasks;
}

function listTasks(tasks) {
  console.log(tasks);
  return tasks;
}

module.exports = { addTask, listTasks };
