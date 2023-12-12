/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) { 
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;

//const Todo = require('./Todo');

// Create a Todo instance
const todoList = new Todo();

// Add todos
todoList.add('Buy groceries');
todoList.add('Complete homework');
todoList.add('Go for a run');

console.log(todoList.getAll()); // Output: ['Buy groceries', 'Complete homework', 'Go for a run']

// Remove a todo
todoList.remove(1);
console.log(todoList.getAll()); // Output: ['Buy groceries', 'Go for a run']

// Update a todo
todoList.update(0, 'Buy fruits');
console.log(todoList.getAll()); // Output: ['Buy fruits', 'Go for a run']

// Get a todo by index
console.log(todoList.get(1)); // Output: 'Go for a run'

// Clear all todos
todoList.clear();
console.log(todoList.getAll()); // Output: []