<script setup>
const props = defineProps(["authorID"]);
const { pending, data: authors } = await useLazyFetch(
 `/api/getAuthor?authorID=${props.authorID}`
);
</script>

<template>
 <h1 class="italic font-light text-sm">
  By: {{ authors.author.LastName }}, {{ authors.author.FirstName }}
 </h1>
</template>
