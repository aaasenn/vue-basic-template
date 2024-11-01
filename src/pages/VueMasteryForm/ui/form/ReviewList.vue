<template>
  <slot name="header" />
  <ul>
    <li
      v-for="review in reviews"
      :key="review.input"
      class="review">
      <slot
        name="list"
        :review="review" />
    </li>
  </ul>
</template>

<script setup lang="ts">
  interface Props {
    reviews: {
      input: string,
      select: string,
      textarea: string
    }[]
  }
  const { reviews } = defineProps<Props>();
</script>

<style scoped>
  .review {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 1px solid slategray;
  }
</style>