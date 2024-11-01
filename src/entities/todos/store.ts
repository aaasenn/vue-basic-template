import { defineStore } from 'pinia';
import { Todo } from './dto';
import { ref } from 'vue';

const initialState: Todo[] = [] 

export const useTodoStore = defineStore('todo', () => {
  const todoList = ref<Todo[]>(initialState);

  function addTodo(todo: Todo) {
    todoList.value.push(todo)
  }

  function removeTodo(todoId: Todo['id']) {
    console.log("enter store")
    console.log(todoList.value.filter(todo => todo.id !== todoId))
    todoList.value = todoList.value.filter(todo => todo.id !== todoId)
  }

  return { todoList, addTodo, removeTodo}
})