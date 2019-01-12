var store = require('store');
// Store current user
store.set('user', { name:'Marcus' })

// Get current user
store.get('user')

// Remove current user
store.remove('user')

// Clear all keys
store.clearAll()

// Loop over all stored values
store.each(function(value, key) {
    console.log(key, '==', value)
})
/*

//to save task to the list
document.getElementById('AddTaskForm').addEventListener('submit', saveTask);
function saveTask(e) {
  var taskDescription = document.getElementById('taskDescriptionInput').value;
  var taskPriority = document.getElementById('taskPriorityInput').value;
  var taskId = chance.guid();
  var taskStatus = 'Open';

  //create an object for tasks
  var task = {
    id: taskId,
    description: taskDescription,
    priority: taskPriority,
    status: taskStatus
  }

  //checking if local storage is empty and then saving to it
  if(localStorage.getItem('tasks') == null){
    var tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  else {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //reset object
  document.getElementById('AddTaskForm').reset();

  //synchronize list
  //fetchTask();

  e.preventDefault();
}

//change status of task to close
function setStatusClosed(id){
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  for (var i = 0; i < tasks.length; i++) {
    if(tasks[i].id == id) {
      tasks[i].status = 'Closed';
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

  //fetchTask();
}

//deleting task
function deleteTask(id){
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  for (var i = 0; i < tasks.length; i++) {
    if(tasks[i].id == id) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

  //fetchTask();
}

/*
//function to create an output list with tasks
function fetchTask() {
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  var taskList = document.getElementById('TaskList');

  TaskList.innerHTML = '';

  for (var i = 0; i < tasks.length; i++) {
    var id = tasks[i].id;
    var description = tasks[i].description;
    var priority = tasks[i].priority;
    var status = tasks[i].status;

    TaskList.innerHTML += '<div class="card">' +
                          '<span class="card-header"> <h3>' + description  + '</span>' + '</h3>' +
                          '<span class="fas fa-exclamation-circle"> Priority: ' + priority +'</span>'+
                          '<span class="card-body">' +
                            '<p><span class="badge badge-primary">' + status + '</span>' + '</p>' +
                              '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Complete</a>' + '<span>  </span>' +
                              '<a href="#" onclick="deleteTask(\''+id+'\')" class="btn btn-danger">Delete</a>' +
                          '</span>' +'<bg \/>' +
                          '</div>';
  }
}
*/
/*

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
 
localStorage.setItem('myFirstKey', 'myFirstValue');
console.log(localStorage.getItem('myFirstKey'));
*/
