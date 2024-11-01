<template>
  <div>
    <ReviewForm @submit-form="addReview" />
    <ReviewList :reviews="reviews">
      <template #header>
        <h3>Heading of list</h3>
      </template>
      <template #list="{review}">
        <div>The rate is{{ review.select }} </div>
        <div>The input is{{ review.input }} </div>
        <div>The desc is {{ review.textarea }}</div>
      </template>
    </ReviewList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ReviewForm from './ReviewForm.vue';
import ReviewList from './ReviewList.vue';
import { FormValues } from './utils';

const reviews = ref([{
    input: "df",
    select: "dfkj",
    textarea: "fdksj"
  }])

const addReview = (review: FormValues) => {
  reviews.value.push(review)
}
</script>
