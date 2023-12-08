<script setup>
const props = defineProps(["authorID"]);
const { pending, data: authors } = await useLazyFetch(
 `/api/getAuthor?authorID=${props.authorID}`
);
</script>

<template>
 <div>
  <h1 v-if="pending">Loading...</h1>
  <NuxtLink
   :to="`/viewAuthor/${props.authorID}`"
   v-else
   class="italic font-light text-sm"
  >
   By: {{ authors.author.LastName }}, {{ authors.author.FirstName }}
  </NuxtLink>
 </div>
</template>
