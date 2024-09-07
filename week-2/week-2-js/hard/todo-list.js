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
    this.todos.push(todo); //added a todo into the list
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1); //array.splice(index, numberOfElementsToRemove);
  }
  update(index, updatedTodo) {
    if (!(index >= this.todos.length)) {
      // throw new Error("Index out of range");
      this.todos[index] = updatedTodo; //updated the todo at the given index
    }
  }
  getAll() {
    return this.todos; //returns all todos
  }
  get(indexOfTodo) {
    if (!(indexOfTodo >= this.todos.length)) {
      return this.todos[indexOfTodo]; //returns the todo at the given index
    } else {
      return null;
    }
  }
  clear() {
    this.todos = []; //deletes all todos
  }
}

let importantTodos = new Todo();

importantTodos.add("Buy groceries");
importantTodos.add("Finish assignment");
importantTodos.update(2, "Buy groceries and milk");
console.log(importantTodos.get(2)); // null
console.log(importantTodos.getAll()); // [ 'Buy groceries', 'Finish assignment' ]
module.exports = Todo;
