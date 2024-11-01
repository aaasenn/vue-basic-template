<template>
  <form @submit.prevent="addReview">
    <label
      for="input"
      class="block">Input
      <input
        id="input"
        v-model="form.input"
        type="text"></label>

    <label
      for="select"
      class="block">Select 
      <select
        id="select"
        v-model.number="form.select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </label>

    <label for="textarea">Textarea</label>
    <textarea
      id="textarea"
      v-model="form.textarea" />

    <button
      class="block"
      type="submit">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
import { FormValues, defaultFormValues } from './utils';

  const form = reactive(defaultFormValues)

  const emits = defineEmits<{ (e: "submitForm", review: FormValues ): void }>()
  const addReview = () => {
    const review = JSON.parse(JSON.stringify(form));
    
    emits('submitForm', review)
  }
</script>

<style scoped>
.block {
  display: block;
  width: 100%;
}
</style>