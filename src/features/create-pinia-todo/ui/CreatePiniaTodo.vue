<template>
  <div>
    <SearchInput
      ref="searchInput"
      v-model="searchValue" />
    <div class="flex">
      <button @click="handleAddTodoClick">
        Add todo
      </button>
      <button @click="handleReset">
        Reset
      </button>
    </div>
    <transition-group
      name="fade">
      <TodoItem
        v-for="(todo) in todoStore.todoList"
        :id="todo.id"
        :key="todo.id"
        :title="todo.title"
        @remove-pinia-todo="handleRemove" />
    </transition-group>  
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from 'entities/todos/store';
import TodoItem from 'entities/todos/ui/todo-item/TodoItem.vue';
import SearchInput from 'shared/ui/Input/SearchInput.vue';
import { ref } from 'vue';

const searchValue = ref("")
const searchInput = ref<typeof SearchInput>()

const todoStore = useTodoStore();

const handleRemove = (id: string) => {
  console.log("enter remove function")
  todoStore.removeTodo(id)
}



const handleAddTodoClick = () => {
  if (searchValue.value) {
    todoStore.addTodo({ id: searchValue.value, title: searchValue.value })
  }
  searchValue.value = ""
  searchInput.value.focusInput();
}

const handleReset = () => {
  todoStore.$reset()
}

</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>