
const fs = require('fs');

function saveTasks(filePath, tasks) {
  for (let task of tasks) {
    fs.appendFileSync(filePath, (task + '\n'));
  }
  console.log('File added to JSON');
}

function loadTasks(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8')
    let taskList = data.split('\n');
    return taskList;
  }
  else {
    return [];
  }
}

module.exports = { saveTasks, loadTasks };
